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
        },
        setRainMode: (state, action) => {
            state.background.rainMode = action.payload
        },
    }
})

export const { setNightMode,setRainMode } = backgroundSlice.actions;
export default backgroundSlice.reducer
