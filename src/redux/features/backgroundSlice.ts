import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    background: {
        nightMode: false,
        rainMode: false,
    }
};

export const backgroundSlice = createSlice({
    name: 'background',
    initialState,
    reducers: {
        setNightMode: (state, action) => {
            state.background.nightMode = action.payload
        }
    }
})

export const { setNightMode } = backgroundSlice.actions;
export default backgroundSlice.reducer
