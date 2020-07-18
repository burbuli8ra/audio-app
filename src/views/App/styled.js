import styled from 'styled-components';
import { Link } from 'react-router-dom';

const App = styled.div`
  height: 100vh;
  text-align: center;
`;
App.displayName = 'App';

const Header = styled.div`
  background-color: #ffffff;
  box-shadow: 0 0 9px 0 rgba(140, 140, 158, 0.25);
  grid-area: header;
  padding: 20px;
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
  --header-height: 68px;
  box-sizing: border-box;
  height: calc(100% - var(--header-height));
  padding-top: 40px;
`;
Main.displayName = 'Main';

export default {
  App,
  Header,
  HeaderLink,
  Main
};