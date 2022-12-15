import { createSlice } from "@reduxjs/toolkit";
import data from '../../data'

const initialState = {
    background: data.background
}

export const backgroundSlice = createSlice({
    name: 'background',
    initialState,
    reducers: {
        setNightMode: (state, action) => {
            const nightMode = state.background.find(mode => mode.id === 'nightMode')
            if (nightMode) {
              nightMode.isOn = action.payload
            }
          },
        setTimeDetails: (state, action) => {
            const timeDetails = state.background.find(mode => mode.id === 'timeDetails')
            if (timeDetails) {
              timeDetails.isOn = action.payload
            }
        },
        setControlPanelBoard: (state, action) => {
            const controlPanelBoard = state.background.find(mode => mode.id === 'controlPanelBoard')
            if (controlPanelBoard) {
              controlPanelBoard.isOn = action.payload
            }
        }
    }
})

export const { setNightMode, setTimeDetails, setControlPanelBoard } = backgroundSlice.actions;
export default backgroundSlice.reducer
