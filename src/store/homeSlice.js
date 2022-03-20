import { createSlice } from "@reduxjs/toolkit";


const homeSlice = createSlice({
  name: 'home',
  initialState: {
    products: [],
    likeProducts: [],
    user: false,
    subTotal: 0,
    oneProduct: {},
    loginModal: true,
    overmodal: false,
    openCard: false,
    productName: 'fruits',
  },
  reducers: {
    // LikeProducts Redures
    addLike: (state, action) => {
      if (!state.likeProducts.length) {
        state.likeProducts.push(action.payload);
      }
      else {
        const result = state.likeProducts.find((e) => (e.id === action.payload.id));
        if (!result) {
          state.likeProducts.push(action.payload);
        }
      }
    },

    // Product And Modals Reduser
    clearProduct: (state, action) => {
      for (let i of state.products) {
        if (action.payload.id === i.id) {
          i.count = 0;
          i.sum = 0;
        }
      }
    },
    chengeTrusy: (state, action) => {
      state[action.payload.mod] = true;
    },
    chengeFalsey: (state, action) => {
      state[action.payload.mod] = false;
    },
    getProduct: (state, action) => {
      state.productName = action.payload.nam;
    },
    getSubtotal: (state) => {
      state.subTotal = state.products
        .map((e) => (e.sum))
        .reduce((a, b) => (a + b));
    },
    decrementProduct: (state, action) => {
      for (let i of state.products) {
        if (action.payload.id === i.id) {
          const prise = i.price;
          i.count += 1;
          i.sum = i.count * prise;
          i.pro -= 1;
        }
      }
    },
    icrementProduct: (state, action) => {
      for (let i of state.products) {
        if (action.payload.id === i.id) {
          if (i.count) {
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
        const result = state.products.find((e) => (e.id === action.payload.id));
        if (!result) {
          state.products.push(action.payload)
        }
      }
    }
  }

});
export const {
  clearProduct,
  addLike,
  getSubtotal,
  chengeFalsey,
  chengeTrusy,
  productAdd,
  getProduct,
  decrementProduct,
  icrementProduct,
} = homeSlice.actions;

export default homeSlice.reducer;