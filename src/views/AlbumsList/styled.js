import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Cover = styled.div`
  border: 3px solid #28aa90;
  border-radius: 50%;
  height: 120px;
  width: 120px;
  overflow: hidden;

  > img {
    height: 100%;
    width: 100%;
  }
`;
Cover.displayName = 'Cover';

const Title = styled.div`
  color: #28aa90;
  font-size: 18px;
  font-weight: bold;
`;
Title.displayName = 'Title';

const Artist = styled.div`
  color: #404040;
  font-size: 14px;
`;
Artist.displayName = 'Artist';

const Details = styled.div`
  padding: 20px 0;
  margin-left: 20px;

  ${Title} {
    margin-bottom: 8px;
  }
`;
Details.displayName = 'Details';

const AlbumLink = styled(Link)`
  display: flex;
  text-align: left;
  text-decoration: none;
`;
AlbumLink.displayName = 'AlbumLink';

const List = styled.div`
  display: inline-flex;
  flex-direction: column;

  ${AlbumLink} {
    margin-bottom: 20px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;
List.displayName = 'List';

const Heading = styled.div`
  color: #28aa90;
  font-size: 24px;
  font-weight: bold;
  text-decoration: underline;
  text-transform: uppercase;
  margin-bottom: 20px;
`;
Heading.displayName = 'Heading';

export default {
  AlbumLink,
  Artist,
  Cover,
  Details,
  Heading,
  List,
  Title
}