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

const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
];

export const anecdote = anecdotes[Math.floor(Math.random()* anecdotes.length)]
  
