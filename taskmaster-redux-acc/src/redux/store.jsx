import { configureStore } from "@reduxjs/toolkit";
import tasksReduser from "./feature/tasks/tasksSlice";

const store = configureStore({
    reducer: {
        tasks: tasksReduser,
    }
})

export default store;