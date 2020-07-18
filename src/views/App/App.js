import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AlbumsList, AlbumInfo } from '..';

import Styled from './styled';

function App() {
  return (
    <Styled.App>
      <Router>
        <Switch>
          <Route path="/" exact component={AlbumsList} />
          <Route path="/album/:id" component={AlbumInfo} />
        </Switch>
      </Router>
    </Styled.App>
  );
}

export default App;
