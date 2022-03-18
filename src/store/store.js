import {configureStore} from '@reduxjs/toolkit';
import homeReduse from './homeSlice';
import userClice from './userClice';

const store = configureStore({
  reducer:{
    home:homeReduse,
    user:userClice,
  }
});

export default store