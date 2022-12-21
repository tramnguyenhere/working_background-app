import { DayOfWeek } from "../types/type";

export const hours = new Date().getHours()
export const minutes = new Date().getMinutes() < 10 ? '0'+ new Date().getMinutes() : new Date().getMinutes()

export const dayOfWeek = () => {switch (new Date().getDay()) {
    case 0:
      return DayOfWeek.SUNDAY;
    case 1:
        return DayOfWeek.MONDAY;
    case 2:
        return DayOfWeek.TUESDAY;
    case 3:
        return DayOfWeek.WEDNESDAY;
    case 4:
        return DayOfWeek.THURSDAY;
    case 5:
        return DayOfWeek.FRIDAY;
    case 6:
        return DayOfWeek.SATURDAY;
    default:
      return DayOfWeek.SUNDAY
  }}
  
  let date = new Date();
  export let shortDate = date.toLocaleDateString("default", {
    day: "numeric",
    month: "long",
  });

export const greeting = () => {
    if (hours > 20 || hours < 4) {
    return 'Good night 🌃'
    } else if (hours > 12) {
        return 'Good afternoon 🌆'
    } else {
        return 'Good morning 🌇'
    }
}

  
