import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AlbumsList, AlbumInfo } from '..';

import Styled from './styled';

function App() {
  return (
    <Styled.App>
      <Router>
        <Styled.Header>
          <Styled.HeaderLink to="/">
            AUDIO APP
          </Styled.HeaderLink>
        </Styled.Header>
        <Styled.Main>
        <Switch>
          <Route path="/" exact component={AlbumsList} />
          <Route path="/album/:id" component={AlbumInfo} />
        </Switch>
        </Styled.Main>
      </Router>
    </Styled.App>
  );
}

export default App;
