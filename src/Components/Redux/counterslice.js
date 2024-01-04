import { createSlice } from "@reduxjs/toolkit";

const counterslice = createSlice({
    name:'counter',
    initialState:{
        count :0
    },
    reducers:{
        increment:(state)=>{
            state.count+=1
        },
        decrement:(state)=>{
            state.count-=1
    },
    reset:(state)=>{
        state.count=0
    },
 incrementbyAmount:(state,action)=>{
    state.count += action.payload
 }

}
})

export const {increment,decrement,reset,incrementbyAmount}= counterslice.actions 
export default counterslice.reducer