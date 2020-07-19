import { initialState } from '..';

const activeAudioIndexReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_ACTIVE_INDEX':
      return payload;
    case 'RESET_ACTIVE_INDEX':
      return initialState.activeAudioIndex;
    default:
      return state;
  }
};

export default activeAudioIndexReducer;