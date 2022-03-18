import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    products: [],
  },
  reducers: {
    addelement: (state) => {
      console.log(state.products);
    }
  }
})
export const { addelement } = userSlice.actions;

export default userSlice.reducer;