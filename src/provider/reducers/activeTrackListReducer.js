import { initialState } from '..';

const activeTrackListReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_ACTIVE_LIST':
      return payload;
    case 'RESET_ACTIVE_LIST':
      return initialState.activeTrackList;
    default:
      return state;
  }
};

export default activeTrackListReducer;