import React, { useEffect, useState } from 'react';
import { Loader } from '../../components';
import Styled from './styled';
import albumInfoMock from '../../__mocks__/album.json';

const AlbumInfo = ({ location }) => {
  // Get the album ID from location state
  // and use as a fallback the id inside the url
  const { state = {} } = location;
  const { albumId = window.location.pathname.substr(-1) } = state;
  
  const [isLoading, setIsLoading] = useState(true);
  const [albumInfo, setAlbumInfo] = useState([]);

  // @todo replace with actual API call
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlbumInfo(albumInfoMock[albumId]);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [albumId]);

  return (
    isLoading
      ? <Loader />
      : (
        <>
          <Styled.Heading>{albumInfo.title}</Styled.Heading>
          <Styled.List>
          {albumInfo.tracks.map(track => (
            <Styled.Track key={track.title}>
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