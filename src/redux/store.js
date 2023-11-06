import { configureStore } from '@reduxjs/toolkit';

import {homeReducer}  from './homeReducers';

export const store = configureStore({
  reducer: {
    homeReducer

  },
});
