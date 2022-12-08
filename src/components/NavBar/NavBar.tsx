import React, { useEffect, useState } from 'react';
import { changeTimeBackground } from '../../redux/features/backgroundSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { TimeType } from '../../types/type';

import './NavBar.scss';
const NavBar = () => {
  const [day, setDay] = useState(true)
  const timeOfDay = useAppSelector((state: RootState) => state.background.background)
  const dispatch = useAppDispatch()
  const isDay = timeOfDay.time === TimeType.DAY;

  const hours = new Date().getHours()
  const minutes = new Date().getMinutes() < 10 ? '0'+ new Date().getMinutes() : new Date().getMinutes()
  
  const timeOfDayHandler = (e:any) => {
    e.preventDefault()
    setDay(!day)
  }

  useEffect(() => {
    day? dispatch(changeTimeBackground(TimeType.DAY)) : dispatch(changeTimeBackground(TimeType.NIGHT))
  },[day, dispatch])

  return (
    <div className='navbar__wrapper'>
      <div className='navlist'>
        <button className='navitem' id='btn__clock'>{hours}:{minutes}</button>
        <button onClick={timeOfDayHandler} className={`navitem  ${!isDay && 'night-mode'}`} id='btn__time-mode'>
          <i className="fa-solid fa-circle time-mode__icon" id='icon--control'></i>
          <i className='fa-solid fa-sun time-mode__icon' id='icon--day'></i>
          <i className='fa-solid fa-moon time-mode__icon' id='icon--night'></i>
        </button>
         </div>
      </div>
  )
}

export default NavBar