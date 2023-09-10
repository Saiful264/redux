import { createSlice } from "@reduxjs/toolkit";


const mySlice = createSlice({
    name: 'mySlice',
    initialState: [],
    reducers: {
        towNumber: () => {}
    }
})

export const { towNumber } = mySlice.actions;

export default mySlice.reducer;