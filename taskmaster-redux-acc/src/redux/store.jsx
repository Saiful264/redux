import { configureStore } from "@reduxjs/toolkit";
import tasksReduser from "./feature/tasks/tasksSlice";
import userSlice from "./feature/user/userSlice";

const store = configureStore({
    reducer: {
        tasks: tasksReduser,
        userSlice: userSlice,
    }
})

export default store;