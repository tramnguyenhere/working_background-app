import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    songState: true,
    moodSong: {
        chill: true,
        jazzy: false,
        sleepy: false
    }, 
   soundEffects: [
      {
         id: 'rain',
         name: 'Rain',
         play: false,
         volume: 0,
      },
      {
         id: 'keyboard',
         name: 'Keyboard',
         play: false,
         volume: 0,
      },
      {
         id: 'city',
         name: 'City Traffic',
         play: false,
         volume: 0,
      },
      {
         id: 'campfire', 
         name: 'Campfire',
         play:false,
         volume: 0
      },
      {
         id: 'fan', 
         name: 'Fan',
         play:false,
         volume: 0
      },
      {
         id: 'river', 
         name: 'River',
         play:false,
         volume: 0
      },
      {
         id: 'storm', 
         name: 'Storm',
         play:false,
         volume: 0
      },
      {
         id: 'waves', 
         name: 'Waves',
         play:false,
         volume: 0
      },
      {
         id: 'wind', 
         name: 'Wind',
         play:false,
         volume: 0
      },
      {
         id: 'people', 
         name: 'People',
         play:false,
         volume: 0
      }     
    ]
    
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
       setSoundEffect: (state, action) => {
         const adjustedEffect = { id: action.payload.id, name: action.payload.name, play: action.payload.play, volume: action.payload.volume }
       
        
         state.soundEffects = state.soundEffects.map(effect => {
            if (effect.id === adjustedEffect.id) {
               return {...effect, play: adjustedEffect.play, volume: adjustedEffect.volume}
            } 
            return effect
          })
        }
    }
})

export const { setSongState, setChillMoodSong, setJazzyMoodSong, setSoundEffect } = backgroundSlice.actions;
export default backgroundSlice.reducer
