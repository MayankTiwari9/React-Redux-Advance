import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    isCartOpen: false,
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        showCart(state) {
            state.isCartOpen = !state.isCartOpen;
        }
    }
})

export const cartAction = cartSlice.actions;

export default cartSlice.reducer;
