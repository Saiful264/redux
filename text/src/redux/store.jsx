import { configureStore,  } from "@reduxjs/toolkit"
import counterReducer from "./featuchers/counter/counterSlich";

import logger from "./middlewares/Logger";

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;