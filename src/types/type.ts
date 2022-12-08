
export enum TimeType {
    DAY = 'day',
    NIGHT = 'night'
}
export enum WeatherType {
    RAINY = 'rainy',
    SUNNY = 'sunny'
}

export type Time = TimeType.DAY | TimeType.NIGHT
export type Weather = WeatherType.RAINY | WeatherType.SUNNY

export interface backgroundState {
    time: Time,
    weather: Weather 
}