import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    songState: true,
    moodSong: {
        chill: true,
        jazzy: false,
        sleepy: false
    }, 
    soundEffect: {
        rainVolume: 0,
        keyboardVolume: 0,
        cityTrafficVolume: 0,
        campfireVolume: 0,
        fanVolume: 0,
        riverVolume: 0,
        stormVolume: 0,
        wavesVolume: 0,
        windVolume: 0,
        peopleVolume: 0     
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
        setRainEffect: (state, action) => {
           state.soundEffect.rainVolume = action.payload
        },
        setKeyboardEffect: (state, action) => {
           state.soundEffect.keyboardVolume = action.payload
        },
        setCampfireEffect: (state, action) => {
           state.soundEffect.campfireVolume = action.payload
        },
        setFanEffect: (state, action) => {
           state.soundEffect.fanVolume = action.payload
        },
        setRiverEffect: (state, action) => {
           state.soundEffect.riverVolume = action.payload
        },
        setStormEffect: (state, action) => {
           state.soundEffect.stormVolume = action.payload
        },
        setWavesEffect: (state, action) => {
           state.soundEffect.wavesVolume = action.payload
        },
        setWindEffect: (state, action) => {
           state.soundEffect.windVolume = action.payload
        },
        setPeopleEffect: (state, action) => {
           state.soundEffect.peopleVolume = action.payload
        },
        setCityEffect: (state, action) => {
           state.soundEffect.cityTrafficVolume = action.payload
        },
    }
})

export const { setSongState, setChillMoodSong, setJazzyMoodSong, setRainEffect, setSleepyMoodSong, setKeyboardEffect, setCampfireEffect, setCityEffect, setFanEffect, setPeopleEffect, setRiverEffect, setStormEffect, setWavesEffect, setWindEffect } = backgroundSlice.actions;
export default backgroundSlice.reducer
