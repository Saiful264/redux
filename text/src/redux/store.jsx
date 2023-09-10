import { configureStore,  } from "@reduxjs/toolkit"
import counterReducer from "./featuchers/counter/counterSlich";

import logger from "./middlewares/Logger";
import baseApi from "./featuchers/counter/api/baseApi";

const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;