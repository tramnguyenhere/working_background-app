export interface backgroundState {
    nightMode: boolean,
    rainMode: boolean 
}

export enum DayOfWeek {
    MONDAY = 'Monday',
    TUESDAY = 'Tuesday',
    WEDNESDAY = 'Wednesday',
    THURSDAY = 'Thursday',
    FRIDAY = 'Friday',
    SATURDAY = 'Saturday',
    SUNDAY = 'Sunday',
}

export interface soundEffectState {
    id: string,
    name: string,
    play:boolean,
    volume:number
}