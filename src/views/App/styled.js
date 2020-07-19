import styled from 'styled-components';
import { Link } from 'react-router-dom';

const App = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
`;
App.displayName = 'App';

const Header = styled.div`
  background-color: #ffffff;
  box-shadow: 0 0 9px 0 rgba(140, 140, 158, 0.25);
  padding: 20px;
  position: sticky;
  top: 0;
  text-align: left;
`;
Header.displayName = 'Header';

const HeaderLink = styled(Link)`
  color: #181818;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
`;
HeaderLink.displayName = 'HeaderLink';

const Main = styled.div`
  box-sizing: border-box;
  flex-grow: 1;
  padding: 40px 0;
  overflow: auto;
`;
Main.displayName = 'Main';

export default {
  App,
  Header,
  HeaderLink,
  Main
};