import { initialState } from '..';

const activeArtistReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_ACTIVE_ARTIST':
      return payload;
    case 'RESET_ACTIVE_ARTIST':
      return initialState.activeArtist;
    default:
      return state;
  }
};

export default activeArtistReducer;