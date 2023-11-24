import { configureStore } from "@reduxjs/toolkit";
import cardReducer from './slices/cardListSlice';




const store = configureStore({
    reducer: {
        counter: cardReducer
    }
})



export default store;