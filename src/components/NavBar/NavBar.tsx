import React, { useEffect, useState } from 'react';
import { setControlPanelBoard, setNightMode, setRainMode, setTimeDetails } from '../../redux/features/backgroundSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';

import './NavBar.scss';

import { hours, minutes } from '../../utils/utils';
import { setSongState } from '../../redux/features/soundSlice';

const NavBar = () => {
  const [fullscreen, setFullscreen] = useState(false);

  const dispatch = useAppDispatch()

  const isNight = useAppSelector((state: RootState) => state.background.background.nightMode)
  const isRainy = useAppSelector((state: RootState) => state.background.background.rainMode)
  const isPlaying = useAppSelector((state: RootState) => state.sound.songState) 
  const istimeDetailsAvailable = useAppSelector((state:RootState)=> state.background.background.timeDetails)
  const isPanelAvailable = useAppSelector((state: RootState) => {return state.background.background.controlPanelBoard });

  const panelHandler = (e: any) => {
    e.preventDefault();
    dispatch(setControlPanelBoard(!isPanelAvailable))
  }

  const nightModeHandler = (e:any) => {
    e.preventDefault()
    dispatch(setNightMode(!isNight))
  }
  const rainyModeHandler = (e:any) => {
    e.preventDefault()
    dispatch(setRainMode(!isRainy))
  }

  const songStateHandler = (e: any) => {
    e.preventDefault()
    dispatch(setSongState(!isPlaying))
  }
  const timeDetailHandler = (e: any) => {
    e.preventDefault()
    dispatch(setTimeDetails(!istimeDetailsAvailable))
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

  useEffect(() => {
    hours > 14 && dispatch(setNightMode(true))
  },[dispatch])

  return (
    <div className='navbar__wrapper'>
        <button onClick={timeDetailHandler} className='navitem' id='btn__clock'>{hours}:{minutes}</button>
        <button onClick={nightModeHandler} className={`navitem  ${isNight && 'night-mode'}`} id='btn__time-mode'>
          <i className="fa-solid fa-circle" id='icon--control'></i>
          <i className='fa-solid fa-sun' id='icon--day'></i>
          <i className='fa-solid fa-moon' id='icon--night'></i>
        </button>
        <button onClick={rainyModeHandler} className={`navitem  ${isRainy && 'rain-mode'}`} id='btn__weather-mode'>
          <i className="fa-solid fa-cloud-rain" id='icon--rain'></i>
        </button>
        <button onClick={songStateHandler} className={`navitem ${isPlaying && 'pause-mode'}`} id='btn__song--control'><i className="fa-solid fa-pause" id='state--pause'></i><i className="fa-solid fa-play" id='state--play'></i></button>
        <button onClick={fullscreenHandler} className='navitem'  id='btn__screensize--control'><i className="fa-solid fa-expand"></i></button>
        <button onClick={panelHandler} className='navitem' id='btn__control-panel'><i className="fa-solid fa-sliders"></i></button>
    </div>
  )
}

export default NavBar