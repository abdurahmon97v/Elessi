import {configureStore} from '@reduxjs/toolkit';
import homeReduse from './homeSlice';

const store = configureStore({
  reducer:{
    home:homeReduse,
  }
});

export default store