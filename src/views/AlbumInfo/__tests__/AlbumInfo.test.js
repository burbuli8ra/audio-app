import React from 'react';
import { act, render } from '@testing-library/react';
import { StateProvider, initialState, mainReducer } from '../../../provider';
import AlbumInfo from '../AlbumInfo';

describe('AlbumInfo view', () => {
  let wrapper;
  const props = {
    match: {
      params: {
        id: 1
      }
    }
  };

  const setup = props => (
    <StateProvider reducer={mainReducer} initialState={initialState}>
      <AlbumInfo {...props} />
    </StateProvider>
  );

  test('should match snapshot', () => {
    jest.useFakeTimers();
    wrapper = render(setup(props));

    act(() => jest.runAllTimers());

    expect(wrapper).toMatchSnapshot();
  });
});