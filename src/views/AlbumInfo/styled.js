import styled from 'styled-components';

const Heading = styled.div`
  color: #28aa90;
  font-size: 24px;
  font-weight: bold;
  text-decoration: underline;
  text-transform: uppercase;
  margin-bottom: 20px;
`;
Heading.displayName = 'Heading';

const Cover = styled.div`
  border: 2px solid #28aa90;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  overflow: hidden;

  > img {
    height: 100%;
    width: 100%;
  }
`;
Cover.displayName = 'Cover';

const Title = styled.div`
  color: #28aa90;
`;
Title.displayName = 'Title';

const Artist = styled.div`
  color: #404040;
  font-size: 14px;
`;
Artist.displayName = 'Artist';

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;

  ${Title} {
    margin-bottom: 4px;
  }
`;
Details.displayName = 'Details';

const Track = styled.div`
  display: flex;
  text-align: left;
`;
Track.displayName = 'Track';

const List = styled.div`
  display: inline-flex;
  flex-direction: column;

  ${Track} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;
List.displayName = 'List';

export default {
  Artist,
  Cover,
  Details,
  Heading,
  List,
  Title,
  Track
};