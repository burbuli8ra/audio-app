import React, { useEffect, useRef, useState } from 'react';
import { useAppContext } from '../../provider';
import Styled from './styled'
import {
  PlayCircleOutlineRounded,
  PauseCircleOutlineRounded,
  SkipNextRounded,
  SkipPreviousRounded
} from '@material-ui/icons';

const AudioPlayer = () => {
  const audioRef = useRef();

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState();
  const [duration, setDuration] = useState();

  const [{ activeArtist, activeAudioIndex, activeTrackList }, dispatch] = useAppContext();
  
  const currentProgress = currentTime / duration * 100 || 0;
  const activeTrack = ((activeAudioIndex || activeAudioIndex === 0) && activeTrackList)
    ? activeTrackList[activeAudioIndex]
    : {};
  const isEmptySource = !Boolean(activeTrack.url);
  const isPrevDisabled = Boolean(!activeAudioIndex);
  const isNextDisabled = typeof(activeAudioIndex) !== 'number'
    || activeTrackList.length - 1 === activeAudioIndex;

  const formatTime = (seconds = 0) => {
    // Create date object with milliseconds
    const date = new Date(seconds * 1000);
    
    // In case of hours get hours, minutes and seconds
    if (date.getUTCHours()) {
      return date.toISOString().substr(11, 8);
    }

    // Get minutes and seconds
    return date.toISOString().substr(14, 5);
  };

  const handlePlayPause = () => {
    if (!isEmptySource) {
      setIsPlaying(!isPlaying);
    }
  };

  const handlePrevClick = () => {
    if (!isPrevDisabled) {
      dispatch({
        type: 'SET_ACTIVE_INDEX',
        payload: activeAudioIndex - 1
      });
    }
  };

  const handleNextClick = () => {
    if (!isNextDisabled) {
      dispatch({
        type: 'SET_ACTIVE_INDEX',
        payload: activeAudioIndex + 1
      });
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (activeTrack.url) {
      setIsPlaying(false);
      audio.load();
    }
  }, [activeTrack.url, activeTrack.title]);

  useEffect(() => {
    const audio = audioRef.current;

    const setAudioData = () => {
      setDuration(audio.duration);
      setAudioTime();
      setIsPlaying(true);
    };

    const setAudioTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const resetAudioTime = () => {
      setIsPlaying(false);
      audio.currentTime = 0;
      setCurrentTime(0);
    };

    const setNextAudio = () => {
      dispatch({
        type: 'SET_ACTIVE_INDEX',
        payload: activeAudioIndex + 1
      });
    };

    const resetAudioPlayer = () => {
      dispatch({ type: 'RESET_ACTIVE_INDEX' });
      dispatch({ type: 'RESET_ACTIVE_LIST' });
      dispatch({ type: 'RESET_ACTIVE_ARTIST' });
    };

    const handleAudioEnd = () => {
      resetAudioTime();
      
      // Reset audio player on last song of list
      if (activeAudioIndex === activeTrackList.length - 1) {
        resetAudioPlayer();
        return;
      }

      setNextAudio();
    };

    // Add event listeners
    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', handleAudioEnd);

    // Cleanup
    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', handleAudioEnd);
    }
  }, [activeAudioIndex, activeTrackList.length, currentTime, dispatch]);


  useEffect(() => {
    const audio = audioRef.current;

    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying]);

  return (
    <Styled.AudioPlayer>
      <audio
        data-testid="audio"
        ref={audioRef}
      >
        <source src={activeTrack.url} type={activeTrack.type} />
        Your browser does not support the audio element.
      </audio>
      <Styled.Info>
        {activeTrack.url ? (
          <>
            <Styled.Title data-testid="audio-title">
              {activeTrack.title || 'Unknown song'}
            </Styled.Title>
            <Styled.Artist data-testid="audio-artist">
              {activeArtist || 'Unknown artist'}
            </Styled.Artist>
          </>
        ) : (
          <Styled.Notification data-testid="audio-notification">
            You have not selected any song yet!
          </Styled.Notification>
        )}
      </Styled.Info>
      <Styled.Controls>
        <Styled.ControlButton
          data-testid="audio-control-prev"
          isDisabled={isPrevDisabled}
          onClick={handlePrevClick}
        >
          <SkipPreviousRounded />
        </Styled.ControlButton>
        <Styled.ControlButton
          data-testid="audio-control-play-pause"
          isDisabled={isEmptySource}
          isMain
          onClick={handlePlayPause}
        >
          {isPlaying
            ? <PauseCircleOutlineRounded data-testid="audio-pause-icon" />
            : <PlayCircleOutlineRounded data-testid="audio-play-icon" />
          }
        </Styled.ControlButton>
        <Styled.ControlButton
          data-testid="audio-control-next"
          isDisabled={isNextDisabled}
          onClick={handleNextClick}
        >
          <SkipNextRounded />
        </Styled.ControlButton>
      </Styled.Controls>
      <Styled.Progress
        currentTime={currentTime}
        totalTime={duration}
      >
        <Styled.Time isDisabled={isEmptySource}>
          {formatTime(currentTime)}
        </Styled.Time>
        <Styled.ProgressBar currentProgress={currentProgress} />
        <Styled.Time isDisabled={isEmptySource}>
          {formatTime(duration)}
        </Styled.Time>
      </Styled.Progress>
    </Styled.AudioPlayer>
  );
};

export default AudioPlayer;