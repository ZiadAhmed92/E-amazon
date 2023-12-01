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
            let existingProduct = state.cartProducts.find(
                (item) => item._id == action.payload._id)
                if(existingProduct){
                    existingProduct.quantity += 1
                }
        },
        decrementByAmount: (state, action) => {
            let existingProduct = state.cartProducts.find(
                (item) => item._id == action.payload._id)
                if(existingProduct && existingProduct.quantity >= 2){

                    existingProduct.quantity -= 1
                }
        },
        removeProduce: (state, action) => {
            let existingProduct = state.cartProducts.filter(
                (item) => item._id != action.payload._id)
               
                if(existingProduct){
                       
                    state.cartProducts = existingProduct
                }
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, resetCart, incrementByAmount,decrementByAmount ,removeProduce} = itemsSlice.actions

const itemsSliceReducer = itemsSlice.reducer

export default itemsSliceReducer