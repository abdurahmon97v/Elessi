import { createSlice } from "@reduxjs/toolkit";


const homeSlice = createSlice({
  name: 'home',
  initialState: {
    products: [],
    user: false,
    loginModal: true,
    overmodal: false,
    openCard: false,
    productName: 'fruits',
  },
  reducers: {
    chengeTrusy: (state, action) => {
      state[action.payload.mod] = true;
    },
    chengeFalsey: (state, action) => {
      state[action.payload.mod] = false;
    },

    getProduct: (state, action) => {
      state.productName = action.payload.nam;
    },
    decrementProduct: (state, action) => {
      for(let i of state.products){
        if(action.payload.id === i.id){
          const prise = i.price;
          i.count += 1;
          i.sum = i.count * prise;
          i.pro -= 1;
        }
      }
    },
    icrementProduct: (state, action) => {
      for(let i of state.products){
        if(action.payload.id === i.id){
          if(i.count){
            const prise = i.price;
            i.count -= 1;
            i.sum = i.count * prise;
            i.pro += 1;
          }
        }
      }
    },
    productAdd: (state, action) => {
      if (!state.products.length) {
        state.products.push(action.payload);
      }
      else {
        for (let i of state.products) {
          if (i.id !== action.payload.id) {
            state.products.push(action.payload);
          }
        }
      }
    }
  }

});
export const { 
  chengeFalsey, 
  chengeTrusy, 
  productAdd, 
  getProduct,
  decrementProduct,
  icrementProduct,
} = homeSlice.actions;

export default homeSlice.reducer;