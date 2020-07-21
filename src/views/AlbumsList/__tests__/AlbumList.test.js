import React from 'react';
import { act, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { StateProvider, initialState, mainReducer } from '../../../provider';
import AlbumsList from '../AlbumsList';

describe('AlbumsList view', () => {
  let wrapper;

  const setup = () => (
    <StateProvider reducer={mainReducer} initialState={initialState}>
      <Router>
        <AlbumsList />
      </Router>
    </StateProvider>
  );

  test('should match snapshot', () => {
    jest.useFakeTimers();
    wrapper = render(setup());

    act(() => jest.runAllTimers());

    expect(wrapper).toMatchSnapshot();
  });
});