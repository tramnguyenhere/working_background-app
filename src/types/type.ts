export type backgroundElement = 'nightMode' | 'timeDetails' | 'controlPanelBoard'
export type moodElement = 'sleepy' | 'jazzy' | 'chill'
export type effectElement = 'rain' | 'keyboard'| 'city' | 'campfire' | 'fan' | 'river' | 'storm' | 'waves' | 'wind' | 'people'

export interface DataType {
    background: Array<{
        id: backgroundElement;
        isOn: boolean
    }>,
    soundState: boolean,
    mood: Array<{
        id: moodElement,
        isPlayed: boolean
    }>,
    effects: Array<
        {
            id: effectElement,
            name: string,
            isPlayed: boolean,
            volume: number,
         }>
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
