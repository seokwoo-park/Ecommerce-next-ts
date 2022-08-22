import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
  product: string;
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
