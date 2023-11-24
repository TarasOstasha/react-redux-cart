import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    step: 1,
};

const cardSlice = createSlice({
    initialState,
    name: 'counter',
    reducers: {
        increment: (state, action)=>{
            const {count, step} = state;
            state.count = count + step;
        }
    }
})



const { reducer, actions } = cardSlice;
export const { increment } = actions;

export default reducer;