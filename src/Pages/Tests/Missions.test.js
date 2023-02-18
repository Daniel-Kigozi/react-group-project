import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Missions from '../Missions';
import store from '../../Redux/configureStore';

describe("Missions page", () => {
it('renders correctly', () => {
  const Mission = renderer.create(
      <Provider store={store}><Missions /></Provider>,
    )
    .toJSON();
  expect(Mission).toMatchSnapshot();
});
})