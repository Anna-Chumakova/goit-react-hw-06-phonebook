import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: "",
    reducers: {
        setFilter: (_, { payload }) => 
            payload
        
    }
});

export const {setFilter} = filterSlice.actions;

export const reducerFilterSlice = filterSlice.reducer;