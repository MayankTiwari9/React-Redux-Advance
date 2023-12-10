import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./cart";
import cartItemReducer from "./cartItems";

const store = configureStore({
    reducer: {cart: cartreducer, cartitem: cartItemReducer},
})

export default store;