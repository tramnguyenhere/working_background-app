import { createSlice } from "@reduxjs/toolkit";
import { TimeType, WeatherType } from "../../types/type";

const initialState = {
    background: {
        time: TimeType.NIGHT,
        weather: WeatherType.SUNNY
    }
};

export const backgroundSlice = createSlice({
    name: 'background',
    initialState,
    reducers: {
        changeTimeBackground: (state, action) => {
            state.background.time = action.payload
        }
    }
})

export const { changeTimeBackground } = backgroundSlice.actions;
export default backgroundSlice.reducer
