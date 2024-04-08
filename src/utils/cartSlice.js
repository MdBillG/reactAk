import {createSlice} from "@reduxjs/toolkit"

const cartSlice =createSlice({
    name: 'cart',
    initialState: {
        items:['banana']
    },
    reducers:{
        addItem: (state,action)=>{
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.items.pop(item => item !== action.payload)
        }
    }
})

export default cartSlice.reducer;
export const{addItem,removeItem} =cartSlice.actions