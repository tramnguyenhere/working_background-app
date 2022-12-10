import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    background: {
        nightMode: false,
        rainMode: false,
        timeDetails: false,
        controlPanelBoard: false 
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
        setTimeDetails: (state, action) => {
            state.background.timeDetails = action.payload
        },
        setControlPanelBoard: (state, action) => {
            state.background.controlPanelBoard = action.payload
        }
    }
})

export const { setNightMode,setRainMode, setTimeDetails, setControlPanelBoard } = backgroundSlice.actions;
export default backgroundSlice.reducer
