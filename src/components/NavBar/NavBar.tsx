import React, { useEffect, useState } from 'react';
import { setControlPanelBoard, setNightMode, setTimeDetails } from '../../redux/features/backgroundSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';

import './NavBar.scss';

import { hours, minutes } from '../../utils/utils';
import { setSongState, setSoundEffect } from '../../redux/features/soundSlice';

const NavBar = () => {
  // Manage state of fullscreen, the default is normal screen
  const [fullscreen, setFullscreen] = useState(false);

  const dispatch = useAppDispatch()

  // Data extracted from redux store

  const isNight = useAppSelector((state: RootState) => state.background.background).find(mode => mode.id === 'nightMode')?.isOn 
 
  const isPlaying = useAppSelector((state: RootState) => state.sound.songState) 

  const isTimeDetailsVisibility = useAppSelector((state: RootState) => state.background.background).find(mode => mode.id === 'timeDetails')?.isOn
  
  const isPanelAvailable = useAppSelector((state: RootState) => state.background.background).find(mode => mode.id === 'controlPanelBoard')?.isOn
  
  const rainVolume = useAppSelector((state: RootState) => state.sound.soundEffects).find(effect => effect.id === 'rain')?.volume
  const rainElement = useAppSelector((state: RootState) => state.sound.soundEffects).find(effect=>effect.id==='rain');
  
  // Handle click to change the visibility of control panel in redux store
  const panelHandler = (e: any) => {
    e.preventDefault();
    dispatch(setControlPanelBoard(!isPanelAvailable))
  }

  // Handle click  to change the visibility of night mode in redux store
  const nightModeHandler = (e: any) => {
    e.preventDefault()
    dispatch(setNightMode(!isNight))
  }

  // Handle click to change the visibility of rain mode based on sound effect in redux store
  const rainyModeHandler = (e: any) => {
    e.preventDefault()

    // To handle the value of volume as a param when dispatch action
    let setRainVolume;
    
    // If the rain mode is on,
    if (rainVolume && rainVolume > 0) {
      setRainVolume = 0 // turn it off by set the volume to 0
    } else { // If it is off,
      setRainVolume = 0.5 // when being clicked, set it on by set the volume default 0.5
    }
    
    dispatch(setSoundEffect({...rainElement, volume: setRainVolume}))
  }

  // Handle click to change the state of song (on/off) in redux store
  const songStateHandler = (e: any) => {
    e.preventDefault()
    dispatch(setSongState(!isPlaying))
  }

  // Handle click to change the visibility of time details in redux store
  const timeDetailHandler = (e: any) => {
    e.preventDefault()
    dispatch(setTimeDetails(!isTimeDetailsVisibility))
  }

  // Handle click to change the screen mode (fullscreen/normal) of the website
  const fullscreenHandler = (e: any) => {
    e.preventDefault()

    if (!fullscreen) {
      setFullscreen(true)
      document.documentElement.requestFullscreen()
    } else {
      setFullscreen(false);

      // If the web is already in the exit fullscreen mode, ensure it does exit
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } 
    }
  }

  useEffect(() => {
    // Night mode is set automatically when it's before 5 o'clock or after 14 o'clock
    (hours > 14 || hours < 5) && dispatch(setNightMode(true))
  },[dispatch])

  return (
    <div className='navbar__wrapper'>
      <button onClick={timeDetailHandler} className='navitem' id='btn__clock'>
        {hours}:{minutes}
      </button>
      <button onClick={nightModeHandler} className={`navitem  ${isNight && 'night-mode'}`} id='btn__time-mode'>
        <i className="fa-solid fa-circle" id='icon--control' />
        <i className='fa-solid fa-sun' id='icon--day' />
        <i className='fa-solid fa-moon' id='icon--night' />
      </button>
      <button onClick={rainyModeHandler} className={`navitem  ${rainVolume !== 0 && 'rain-mode'}`} id='btn__weather-mode'>
        <i className="fa-solid fa-cloud-rain" id='icon--rain' />
      </button>
      <button onClick={songStateHandler} className={`navitem ${isPlaying && 'pause-mode'}`} id='btn__song--control'>
        <i className="fa-solid fa-pause" id='state--pause' />
        <i className="fa-solid fa-play" id='state--play' />
      </button>
      <button onClick={fullscreenHandler} className='navitem' id='btn__screensize--control'>
        <i className="fa-solid fa-expand" />
      </button>
      <button onClick={panelHandler} className='navitem' id='btn__control-panel'>
        <i className="fa-solid fa-sliders" />
      </button>
    </div>
  )
}

export default NavBar