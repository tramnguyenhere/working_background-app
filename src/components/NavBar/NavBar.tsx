import React from 'react';
import { setNightMode } from '../../redux/features/backgroundSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';

import './NavBar.scss';
const NavBar = () => {
  const isNight = useAppSelector((state: RootState) => state.background.background.nightMode)
  const dispatch = useAppDispatch()

  const hours = new Date().getHours()
  const minutes = new Date().getMinutes() < 10 ? '0'+ new Date().getMinutes() : new Date().getMinutes()
  
  const nightModeHandler = (e:any) => {
    e.preventDefault()
    dispatch(setNightMode(!isNight))
  }

  return (
    <div className='navbar__wrapper'>
      <div className='navlist'>
        <button className='navitem' id='btn__clock'>{hours}:{minutes}</button>
        <button onClick={nightModeHandler} className={`navitem  ${isNight && 'night-mode'}`} id='btn__time-mode'>
          <i className="fa-solid fa-circle time-mode__icon" id='icon--control'></i>
          <i className='fa-solid fa-sun time-mode__icon' id='icon--day'></i>
          <i className='fa-solid fa-moon time-mode__icon' id='icon--night'></i>
        </button>
         </div>
      </div>
  )
}

export default NavBar