import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./feature/tasks/tasksSlice";
import userSlice from "./feature/user/userSlice";


const store = configureStore({
    reducer: {
        tasksSlice: tasksSlice,
        userSlice: userSlice,
    },
});

export default store;
