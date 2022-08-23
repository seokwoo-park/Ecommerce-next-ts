import { ProductsType } from "./../types/products";
import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
  product: ProductsType;
  quantity: number;
}

const initialState: { currentCart: CartState[] } = {
  currentCart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      console.log(action.payload);
      state.currentCart.push({ product: action.payload, quantity: 1 });
    },
    removeCart: (state, action) => {
      return {
        ...state,
        currentCart: state.currentCart.filter(
          ({ product }) => action.payload !== product
        ),
      };
    },
  },
});
export const { addCart, removeCart } = cartSlice.actions;

export const selectCartState = (state) => state.cart;

export default cartSlice.reducer;
