import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  overmodal: false,
 
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    chengeModal: (state, action) => {
      state.overmodal = action.payload
    },
    
  }

});
export const { chengeModal } = homeSlice.actions;

export default homeSlice.reducer;