import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./featuchers/counter/counterSlich";


const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})

export default store;