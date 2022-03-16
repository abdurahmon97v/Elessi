import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  overmodal: false,
  productName: 'fruits',
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    chengeModal: (state, action) => {
      state.overmodal = action.payload
    },
    getProduct: (state, action) => {
      state.productName = action.payload.nam;
    },
  }

});
export const { chengeModal, getProduct } = homeSlice.actions;

export default homeSlice.reducer;