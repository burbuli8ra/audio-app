import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { StateProvider, initialState, mainReducer } from '../../../provider';
import albumInfoMock from '../../../__mocks__/album.json';
import AudioPlayer from '../AudioPlayer';

describe('AudioPlayer component', () => {
  let wrapper;

  const setup = (state = initialState) => (
    <StateProvider reducer={mainReducer} initialState={state}>
      <AudioPlayer />
    </StateProvider>
  );

  beforeEach(() => {
    window.HTMLMediaElement.prototype.load = () => {};
    window.HTMLMediaElement.prototype.play = () => {};
    window.HTMLMediaElement.prototype.pause  = () => {};
  });

  test('should match snapshot', () => {
    wrapper = render(setup());
    expect(wrapper).toMatchSnapshot();
  });

  test('should show song title and artist', () => {
    const initialStateMock = {
      activeArtist: albumInfoMock[1].artist,
      activeAudioIndex: 2,
      activeTrackList: albumInfoMock[1].tracks
    };

    wrapper = render(setup(initialStateMock));
    const { getByTestId, queryByTestId } = wrapper;

    expect(getByTestId('audio-title')).toBeInTheDocument();
    expect(getByTestId('audio-artist')).toBeInTheDocument();
    expect(queryByTestId('audio-notification')).toBeNull();
  });

  test('should play previous song', () => {
    const initialStateMock = {
      activeArtist: albumInfoMock[1].artist,
      activeAudioIndex: 2,
      activeTrackList: albumInfoMock[1].tracks
    };

    wrapper = render(setup(initialStateMock));
    const { getByTestId } = wrapper;

    expect(getByTestId('audio-title').textContent).toBe(albumInfoMock[1].tracks[2].title);
    fireEvent.click(getByTestId('audio-control-prev'));
    expect(getByTestId('audio-title').textContent).toBe(albumInfoMock[1].tracks[1].title);
  });

  test('should pause song', () => {
    const initialStateMock = {
      activeArtist: albumInfoMock[1].artist,
      activeAudioIndex: 2,
      activeTrackList: albumInfoMock[1].tracks
    };

    wrapper = render(setup(initialStateMock));
    const { getByTestId } = wrapper;

    expect(getByTestId('audio-title').textContent).toBe(albumInfoMock[1].tracks[2].title);
    fireEvent.click(getByTestId('audio-control-next'));
    expect(getByTestId('audio-title').textContent).toBe(albumInfoMock[1].tracks[3].title);
  });

  test('should play next song', () => {
    const initialStateMock = {
      activeArtist: albumInfoMock[1].artist,
      activeAudioIndex: 2,
      activeTrackList: albumInfoMock[1].tracks
    };

    wrapper = render(setup(initialStateMock));
    const { getByTestId, queryByTestId } = wrapper;

    expect(getByTestId('audio-play-icon')).toBeInTheDocument();
    expect(queryByTestId('audio-pause-icon')).toBeNull();
    fireEvent.click(getByTestId('audio-control-play-pause'));
    expect(getByTestId('audio-pause-icon')).toBeInTheDocument();
    expect(queryByTestId('audio-play-icon')).toBeNull();
  });
});