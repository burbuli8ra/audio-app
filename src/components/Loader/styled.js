import styled, { keyframes} from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  color: #28aa90;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  &::before {
    animation: ${spin} 1.4s linear infinite;
    content: '';
    border: 4px solid transparent;
    border-radius: 50%;
    border-top: 4px solid #28aa90;
    display: inline-flex;
    height: 24px;
    width: 24px;
    margin-right: 10px;
  }
`;
Loader.displayName = 'Loader';


export default {
  Loader
};