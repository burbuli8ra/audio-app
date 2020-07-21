import React from 'react';
import { render } from '@testing-library/react';
import { StateProvider, initialState, mainReducer } from '../../../provider';
import Loader from '../Loader';

describe('Loader component', () => {
  let wrapper;

  const setup = () => (
    <StateProvider reducer={mainReducer} initialState={initialState}>
      <Loader />
    </StateProvider>
  );

  test('should match snapshot', () => {
    wrapper = render(setup());
    expect(wrapper).toMatchSnapshot();
  });
});