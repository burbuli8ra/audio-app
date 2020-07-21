import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../provider';
import { Loader } from '../../components';
import Styled from './styled';
import albumInfoMock from '../../__mocks__/album.json';

const AlbumInfo = ({ match }) => {
  const { id } = match.params;
  const [isLoading, setIsLoading] = useState(true);
  const [albumInfo, setAlbumInfo] = useState([]);

  const [, dispatch] = useAppContext();

  const handleAlbumClick = index => {
    dispatch({
      type: 'SET_ACTIVE_INDEX',
      payload: index
    });
    dispatch({
      type: 'SET_ACTIVE_LIST',
      payload: albumInfo.tracks
    });
    dispatch({
      type: 'SET_ACTIVE_ARTIST',
      payload: albumInfo.artist
    });
  };

  // @todo replace with actual API call
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlbumInfo(albumInfoMock[id]);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [id]);

  return (
    isLoading
      ? <Loader />
      : (
        <>
          <Styled.Heading>{albumInfo.title}</Styled.Heading>
          <Styled.List>
          {albumInfo.tracks.map((track, index) => (
            <Styled.Track
              key={track.title}
              onClick={() => handleAlbumClick(index)}
            >
              <Styled.Cover>
                <img
                  src={albumInfo.cover}
                  alt={`Cover of "${albumInfo.title}" by ${albumInfo.artist}`}
                />
              </Styled.Cover>
              <Styled.Details>
                <Styled.Title>{track.title}</Styled.Title>
                <Styled.Artist>by <em>{albumInfo.artist}</em></Styled.Artist>
              </Styled.Details>
            </Styled.Track>
          ))}
          </Styled.List>
        </>
      )
  );
};

export default AlbumInfo;