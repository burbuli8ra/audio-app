import React, { createContext, useContext, useReducer } from 'react';
import activeArtistReducer from './reducers/activeArtistReducer';
import activeAudioIndexReducer from './reducers/activeAudioIndexReducer';
import activeTrackListReducer from './reducers/activeTrackListReducer';

export const AppContext = createContext();

export const initialState = {
  activeArtist: null,
  activeAudioIndex: null,
  activeTrackList: []
};

export const mainReducer = (state, action) => ({
  ...state,
  activeArtist: activeArtistReducer(state.activeArtist, action),
  activeAudioIndex: activeAudioIndexReducer(state.activeAudioIndex, action),
  activeTrackList: activeTrackListReducer(state.activeTrackList, action)
});

export const StateProvider = ({ reducer, initialState, children }) => (
  <AppContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </AppContext.Provider>
);

export const useAppContext = () => useContext(AppContext);