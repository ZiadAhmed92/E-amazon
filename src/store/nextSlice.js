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
                if(existingProduct){
                    existingProduct.quantity += action.payload.quantity
                }else{
                    state.cartProducts.push(action.payload)
                    
                }
        },
        resetCart: (state) => {
            state.cartProducts=[]
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, resetCart, incrementByAmount } = itemsSlice.actions

const itemsSliceReducer = itemsSlice.reducer

export default itemsSliceReducer