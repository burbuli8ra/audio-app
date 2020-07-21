import { initialState } from '../..';
import activeArtistReducer from '../activeArtistReducer';

describe('activeArtistReducer', () => {
  test('should return the initial state', () => {
    expect(activeArtistReducer(
      initialState.activeArtist, {}
    )).toEqual(initialState.activeArtist);
  });

  test('should set the active artist', () => {
    const payload = 'The Pure';

    expect(
      activeArtistReducer(
        initialState.activeArtist, {
          type: 'SET_ACTIVE_ARTIST',
          payload
        })
    ).toEqual(payload);
  });

  test('should reset the active artist', () => {
    const currentState = 'The Pure';
    
    expect(
      activeArtistReducer(
        currentState, {
          type: 'RESET_ACTIVE_ARTIST'
        })
    ).toEqual(initialState.activeArtist);
  });
});