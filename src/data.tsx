import { DataType } from "./types/type";

const data:DataType = {
    background: [
        {
            id: 'nightMode',
            isOn: false
        },
        {
            id: 'timeDetails',
            isOn: false
        },
        {
            id: 'controlPanelBoard',
            isOn: false
        },
    ],
    soundState: false,
    mood: [
        {
            id: 'sleepy',
            isPlayed: false
        },
        {
            id: 'jazzy',
            isPlayed: false
        },
        {
            id: 'chill',
            isPlayed: true
        },
    ],
    effects: [
        {
            id: 'rain',
            name: 'Rain',
            isPlayed: false,
            volume: 0,
         },
         {
            id: 'keyboard',
            name: 'Keyboard',
            isPlayed: false,
            volume: 0,
         },
         {
            id: 'city',
            name: 'City Traffic',
            isPlayed: false,
            volume: 0,
         },
         {
            id: 'campfire', 
            name: 'Campfire',
            isPlayed:false,
            volume: 0
         },
         {
            id: 'fan', 
            name: 'Fan',
            isPlayed:false,
            volume: 0
         },
         {
            id: 'river', 
            name: 'River',
            isPlayed:false,
            volume: 0
         },
         {
            id: 'storm', 
            name: 'Storm',
            isPlayed:false,
            volume: 0
         },
         {
            id: 'waves', 
            name: 'Waves',
            isPlayed:false,
            volume: 0
         },
         {
            id: 'wind', 
            name: 'Wind',
            isPlayed:false,
            volume: 0
         },
         {
            id: 'people', 
            name: 'People',
            isPlayed:false,
            volume: 0
         }     
    ],

}

export default data