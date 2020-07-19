import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StateProvider, initialState, mainReducer } from '../../provider';
import { AlbumsList, AlbumInfo } from '..';
import { AudioPlayer } from '../../components';
import Styled from './styled';

function App() {
  return (
    <StateProvider reducer={mainReducer} initialState={initialState}>
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
          <AudioPlayer />
        </Router>
      </Styled.App>
    </StateProvider>
  );
}

export default App;
