import { initialState } from '../..';
import activeAudioIndexReducer from '../activeAudioIndexReducer';

describe('activeAudioIndexReducer', () => {
  test('should return the initial state', () => {
    expect(activeAudioIndexReducer(
      initialState.activeAudioIndex, {}
    )).toEqual(initialState.activeAudioIndex);
  });

  test('should set the active index', () => {
    const payload = 2;

    expect(
      activeAudioIndexReducer(
        initialState.activeAudioIndex, {
          type: 'SET_ACTIVE_INDEX',
          payload
        })
    ).toEqual(payload);
  });

  test('should reset the active index', () => {
    const currentState = 2;

    expect(
      activeAudioIndexReducer(
        currentState, {
          type: 'RESET_ACTIVE_INDEX'
        })
    ).toEqual(initialState.activeAudioIndex);
  });
});