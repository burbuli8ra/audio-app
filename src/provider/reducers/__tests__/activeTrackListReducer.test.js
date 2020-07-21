import { initialState } from '../..';
import activeTrackListReducer from '../activeTrackListReducer';
import albumInfoMock from '../../../__mocks__/album.json';

describe('activeTrackListReducer', () => {
  test('should return the initial state', () => {
    expect(activeTrackListReducer(
      initialState.activeTrackList, {}
    )).toEqual(initialState.activeTrackList);
  });

  test('should set the active track list', () => {
    const payload = albumInfoMock[1].tracks;

    expect(
      activeTrackListReducer(
        initialState.activeTrackList, {
          type: 'SET_ACTIVE_LIST',
          payload
        })
    ).toEqual(payload);
  });

  test('should reset the active track list', () => {
    const currentState = albumInfoMock[1].tracks;

    expect(
      activeTrackListReducer(
        currentState, {
          type: 'RESET_ACTIVE_LIST'
        })
    ).toEqual(initialState.activeTrackList);
  });
});