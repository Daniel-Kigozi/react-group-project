import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Profile from '../Profile';
import store from '../../Redux/configureStore';

it('renders correctly', () => {
  const profile = renderer
    .create(
      <Provider store={store}><Profile /></Provider>,
    )
    .toJSON();
  expect(profile).toMatchSnapshot();
});
