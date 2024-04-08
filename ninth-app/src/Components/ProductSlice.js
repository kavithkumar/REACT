import { createSlice } from "@reduxjs/toolkit"

const initialState={product:[]}
export const ProductSlice = createSlice({
    name: 'Product',
    initialState,
    reducers:{
        addProducts:(state,action)=>{
            state.product.push(action.payload)
        }
    }
})
export const {addProducts}= ProductSlice.actions
export default ProductSlice.reducer