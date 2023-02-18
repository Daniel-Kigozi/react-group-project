import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missions from './Missions/missionsReducer';
import rocketReducer from './Rockets/rocketSlice';

const store = configureStore({
  reducer: {
    missions,
    rockets: rocketReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;