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
      setMoodSong: (state, action) => {
        const selectedMood = { id: action.payload.id, isPlayed: action.payload.isPlayed }
        
        state.moodSong = state.moodSong.map(mood => {
          if (mood.id === selectedMood.id) {
            return { ...mood, isPlayed: selectedMood.isPlayed }
          } 
          return mood
        })
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

export const { setSongState, setMoodSong,setSoundEffect } = backgroundSlice.actions;
export default backgroundSlice.reducer
