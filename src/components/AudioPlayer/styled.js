import styled from 'styled-components';

const AudioPlayer = styled.div`
  background: #ffffff;
  box-shadow: 0 0 9px 0 rgba(140, 140, 158, 0.25);
  padding: 20px 20px 32px 20px;
  position: sticky;
  bottom: 0;
`;
AudioPlayer.displayName = 'AudioPlayer';

const Artist = styled.div`
  color: #404040;
  font-size: 14px;
`;
Artist.displayName = 'Artist';

const Notification = styled.div`
  color: #28aa90;
  font-size: 14px;
  font-style: italic;
`;
Notification.displayName = 'Notification';

const Title = styled.div`
  color: #28aa90;
  font-size: 18px;
  font-weight: bold;
`;
Title.displayName = 'Title';

const Info = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: 45px;
  padding-bottom: 8px;
`;
Info.displayName = 'Info';

const ControlButton = styled.div`
  svg {
    color: ${({ isDisabled }) => isDisabled ? '#d3d3d3' : '#28aa90'};
    cursor: ${({ isDisabled }) => isDisabled ? 'not-allowed' : 'pointer'};
    font-size: ${({ isMain }) => isMain ? '64px' : '42px'};
  }

  &:hover {
    svg {
      color: ${({ isDisabled }) => isDisabled ? '#d3d3d3' : '#3cd1b3'};
    }
  }
`;
ControlButton.displayName = 'ControlButton';

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
Controls.displayName = 'Controls';

const Time = styled.div`
  color: ${({ isDisabled }) => isDisabled ? '#d3d3d3' : '#404040'};
  display: inline-flex;
`;
Time.displayName = 'Time';

const ProgressBar = styled.div.attrs(
  ({ currentProgress }) => ({
    style: {
      backgroundImage: `linear-gradient(to right, #28aa90 ${currentProgress }%, #d3d3d3 0)`
    }
  }))`
  border-radius: 5px;
  height: 10px;
  flex-grow: 1;
  margin: 0 20px;
`;
ProgressBar.displayName = 'ProgressBar';

const Progress = styled.div`
  color: #404040;
  display: flex;
  align-items: center;
  font-size: 14px;
`;
Progress.displayName = 'Progress';

export default {
  Artist,
  AudioPlayer,
  ControlButton,
  Controls,
  Info,
  Notification,
  Progress,
  ProgressBar,
  Time,
  Title
};