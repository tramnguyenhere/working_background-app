import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    songState: true,
    moodSong: {
        chill: true,
        jazzy: false,
        sleepy: false
    }, 
    soundEffect: {
        keyboardVolume: 0,
        cityTrafic: 0,
        campfire: 0,
        fan: 0,
        river: 0,
        storm: 0,
        waves: 0,
        wind: 0,
        people: 0     
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
        setKeyboardEffect: (state, action) => {
            state.soundEffect.keyboardVolume = action.payload
        }
    }
})

export const { setSongState, setChillMoodSong, setJazzyMoodSong, setSleepyMoodSong, setKeyboardEffect } = backgroundSlice.actions;
export default backgroundSlice.reducer
