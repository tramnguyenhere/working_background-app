import React, { useState } from 'react';
import { setNightMode } from '../../redux/features/backgroundSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';

import './NavBar.scss';

import { hours, minutes } from '../../utils/timeUtils';
import { setSongState } from '../../redux/features/soundSlice';

const NavBar = () => {
  const [fullscreen, setFullscreen] = useState(false);
  const dispatch = useAppDispatch()
  const isNight = useAppSelector((state: RootState) => state.background.background.nightMode)
  const isPlaying = useAppSelector((state: RootState) => state.sound.songState) 
  
  const nightModeHandler = (e:any) => {
    e.preventDefault()
    dispatch(setNightMode(!isNight))
  }

  const songStateHandler = (e: any) => {
    e.preventDefault()
    dispatch(setSongState(!isPlaying))
  }

  const fullscreenHandler = (e: any) => {
    e.preventDefault()
    if (!fullscreen) {
      setFullscreen(true)
      document.documentElement.requestFullscreen()
    } else {
      setFullscreen(false);
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } 
    }

  }


  return (
    <div className='navbar__wrapper'>
      <div className='navlist'>
        <button className='navitem' id='btn__clock'>{hours}:{minutes}</button>
        <button onClick={nightModeHandler} className={`navitem  ${isNight && 'night-mode'}`} id='btn__time-mode'>
          <i className="fa-solid fa-circle" id='icon--control'></i>
          <i className='fa-solid fa-sun' id='icon--day'></i>
          <i className='fa-solid fa-moon' id='icon--night'></i>
        </button>
        <button onClick={songStateHandler} className={`navitem ${!isPlaying && 'pause-mode'}`} id='btn__song--control'><i className="fa-solid fa-pause" id='state--pause'></i><i className="fa-solid fa-play" id='state--play'></i></button>
        <button onClick={fullscreenHandler} className='navitem'  id='btn__screensize--control'><i className="fa-solid fa-expand"></i></button>
      </div>
    </div>
  )
}

export default NavBar