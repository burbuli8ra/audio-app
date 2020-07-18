import React, { useEffect, useState } from 'react';
import { Loader } from '../../components';
import Styled from './styled';
import albumsMock from '../../__mocks__/albums.json'

const AlbumList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [albums, setAlbums] = useState([]);

  // @todo replace with actual API call
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlbums(albumsMock);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    isLoading
      ? <Loader />
      : (
        <>
          <Styled.Heading>Recent Releases</Styled.Heading>
          <Styled.List>
          {albums.map(album => (
            <Styled.AlbumLink
              key={`album-${album.id}`}
              to={{
                pathname: `album/${album.id}`,
                state: { albumId: album.id }
               }}
            >
              <Styled.Cover>
                <img
                  src={album.cover}
                  alt={`Cover of "${album.title}" by ${album.artist}`}
                />
              </Styled.Cover>
              <Styled.Details>
                <Styled.Title>{album.title}</Styled.Title>
                <Styled.Artist>by <em>{album.artist}</em></Styled.Artist>
              </Styled.Details>
            </Styled.AlbumLink>
          ))}
          </Styled.List>
        </>
      )
  );
};

export default AlbumList;