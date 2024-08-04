import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./features/cartSlice";

export const myNurseryStore = configureStore({
  reducer: {
    cart: CartReducer,
  },
});

export type RootState = ReturnType<typeof myNurseryStore.getState>;
export type AppDispatch = typeof myNurseryStore.dispatch;
