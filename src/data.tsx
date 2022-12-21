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
            name: 'Sleepy',
            isPlayed: false,
            icon: 'moon'
        },
        {
            id: 'jazzy',
            name: 'Jazzy',
            isPlayed: false,
            icon: 'guitar'
        },
        {
            id: 'chill',
            name: 'Chill',
            isPlayed: true,
            icon: 'cookie-bite'
        },
    ],
    effects: [
        {
            id: 'rain',
            name: 'Rain',
            volume: 0,
         },
         {
            id: 'keyboard',
            name: 'Keyboard',
            volume: 0,
         },
         {
            id: 'city',
            name: 'City Traffic',
            volume: 0,
         },
         {
            id: 'campfire', 
            name: 'Campfire',
            volume: 0
         },
         {
            id: 'fan', 
            name: 'Fan',
            volume: 0
         },
         {
            id: 'river', 
            name: 'River',
            volume: 0
         },
         {
            id: 'storm', 
            name: 'Storm',
            volume: 0
         },
         {
            id: 'waves', 
            name: 'Waves',
            volume: 0
         },
         {
            id: 'wind', 
            name: 'Wind',
            volume: 0
         },
         {
            id: 'people', 
            name: 'People',
            volume: 0
         }     
    ],

}

export default data