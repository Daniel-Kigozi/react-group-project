import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rockets from './Rockets/rocketSlice';

const store = configureStore({
  reducer: {
    rockets,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
