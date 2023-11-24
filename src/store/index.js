import { configureStore } from "@reduxjs/toolkit";




const store = configureStore({
    reducer: {
        cardList: []
    }
})



export default store;