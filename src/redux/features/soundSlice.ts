import { createSlice } from "@reduxjs/toolkit";
import data from '../../data'

const initialState = {
   songState: data.soundState,
   moodSong: data.mood,
   soundEffects: data.effects
};

export const backgroundSlice = createSlice({
    name: 'sound',
    initialState,
    reducers: {
        setSongState: (state, action) => {
          state.songState = action.payload
        },
        setChillMoodSong: (state, action) => {
          const chill = state.moodSong.find(mode => mode.id === 'chill')
          if (chill) {
            chill.isPlayed = action.payload
          }
        },
        setJazzyMoodSong: (state, action) => {
          const jazzy = state.moodSong.find(mode => mode.id === 'jazzy')
          if (jazzy) {
            jazzy.isPlayed = action.payload
          }
        },
        setSleepyMoodSong: (state, action) => {
          const sleepy = state.moodSong.find(mode => mode.id === 'sleepy')
          if (sleepy) {
            sleepy.isPlayed = action.payload
          }
        },
        setSoundEffect: (state, action) => {
          const adjustedEffect = { id: action.payload.id, name: action.payload.name, isPlayed: action.payload.isPlayed, volume: action.payload.volume }
          
          state.soundEffects = state.soundEffects.map(effect => {
              if (effect.id === adjustedEffect.id) {
                return {...effect, isPlayed: adjustedEffect.isPlayed, volume: adjustedEffect.volume}
              } 
              return effect
            })
        }
    }
})

export const { setSongState, setChillMoodSong, setJazzyMoodSong, setSoundEffect } = backgroundSlice.actions;
export default backgroundSlice.reducer
