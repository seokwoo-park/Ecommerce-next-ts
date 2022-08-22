import cartSliceReducer from "./cartSlice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

const combinedReducer = combineReducers({
  cart: cartSliceReducer,
});

export const store = () =>
  configureStore({
    reducer: combinedReducer,
  });

export const wrapper = createWrapper(store);
