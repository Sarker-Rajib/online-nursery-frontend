import { createSlice } from "@reduxjs/toolkit";

type TCartItem = {
    id: string;
    name: string;
    quantity: number;
    price: number;
    image: string;
};

const initialState: {
    products: TCartItem[]
} = {
    products: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state?.products.find(product => product.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                state.products.push(action.payload);
            }
        },
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
