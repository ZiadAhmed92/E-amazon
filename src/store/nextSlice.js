import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartProducts: [],
    favoriteProducts: [],
    allProducts: [],
    userInfo: null,
}
export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let existingProduct = state.cartProducts.find(
                (item) => item._id == action.payload._id)
            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity
            } else {
                state.cartProducts.push(action.payload)

            }
        },
        addToFavourit: (state, action) => {
            let existingProduct = state.favoriteProducts.find(
                (item) => item._id == action.payload._id)
            if (!existingProduct) {
                state.favoriteProducts.push(action.payload)
            } else {
                let existingFavourit = state.favoriteProducts.filter((item) => item._id != action.payload._id)
                state.favoriteProducts = existingFavourit
            }
        },
        resetCart: (state) => {
            state.cartProducts = []
        },
        resetFavourit: (state) => {
            state.favoriteProducts = []
        },
        incrementByAmount: (state, action) => {
            let existingProduct = state.cartProducts.find(
                (item) => item._id == action.payload._id)
            if (existingProduct) {
                existingProduct.quantity += 1
            }
        },
        decrementByAmount: (state, action) => {
            let existingProduct = state.cartProducts.find(
                (item) => item._id == action.payload._id)
            if (existingProduct && existingProduct.quantity >= 2) {

                existingProduct.quantity -= 1
            }
        },
        removeProduce: (state, action) => {
            let existingProduct = state.cartProducts.filter(
                (item) => item._id != action.payload._id)

            if (existingProduct) {

                state.cartProducts = existingProduct
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, resetCart, incrementByAmount, decrementByAmount, removeProduce, addToFavourit, resetFavourit } = itemsSlice.actions

const itemsSliceReducer = itemsSlice.reducer

export default itemsSliceReducer