import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../Redux/configureStore';
import Rockets from '../Rockets';

it('renders correctly', () => {
  const Rocket = renderer
    .create(
      <Provider store={store}><Rockets /></Provider>,
    )
    .toJSON();
  expect(Rocket).toMatchSnapshot();
});