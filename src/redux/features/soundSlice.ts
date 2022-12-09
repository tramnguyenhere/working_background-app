import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    songState: false,
    moodSong: {
        chill: true,
        jazzy: false,
        sleepy: false
    }
};

export const backgroundSlice = createSlice({
    name: 'sound',
    initialState,
    reducers: {
        setSongState: (state, action) => {
            state.songState = action.payload
        },
        setChillMoodSong: (state, action) => {
            state.moodSong.chill = action.payload
        },
        setJazzyMoodSong: (state, action) => {
            state.moodSong.jazzy = action.payload
        },
        setSleepyMoodSong: (state, action) => {
            state.moodSong.sleepy = action.payload
        },
    }
})

export const { setSongState, setChillMoodSong, setJazzyMoodSong, setSleepyMoodSong } = backgroundSlice.actions;
export default backgroundSlice.reducer
