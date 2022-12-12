import React, { useEffect } from 'react'
import { setControlPanelBoard } from '../../redux/features/backgroundSlice';
import { setKeyboardEffect } from '../../redux/features/soundSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import './ControlPanel.scss'

const ControlPanel = () => {
  const dispatch = useAppDispatch();
  const isPanelAvailable = useAppSelector((state: RootState) => state.background.background.controlPanelBoard);
  const soundEffect = useAppSelector((state: RootState)=> state.sound.soundEffect)

  const { keyboardVolume } = soundEffect
  
  const keyboardAudio = document.getElementById("keyboard-effect__audio") as HTMLAudioElement;

  const panelHandler = (e: any) => {
    e.preventDefault();
    dispatch(setControlPanelBoard(!isPanelAvailable))
  }

  const keyboardSoundHandler = (e: any) => {
    dispatch(setKeyboardEffect(e.target.value / 100))
  }
  
  useEffect(() => {
    if (keyboardVolume > 0) {
      keyboardAudio.play()
      keyboardAudio.volume = keyboardVolume
    }
  },[ keyboardAudio, keyboardVolume])

  return (
    <div className='control_panel__wrapper'>
      <button onClick={panelHandler} id='btn--minimize'><i className="fa-solid fa-window-minimize"></i></button>
      <div className='control_panel'>
        <div id='control_panel__mood-section'>
          <h4>Mood</h4>
          <div id='control_panel__mood-list'>
            <button className='control_panel__mood-item'><i className="fa-sharp fa-solid fa-moon"></i>Sleepy</button>
            <button className='control_panel__mood-item'><i className="fa-solid fa-guitar"></i>Jazzy</button>
            <button className='control_panel__mood-item'><i className="fa-solid fa-cookie-bite"></i>Chill</button>
          </div>
        </div>
        <div id='control_panel__effect-section'>
          <h4>Sound</h4>
          <div id='control_panel__effect-list'>
            <div className='control_panel__effect-item' id='effect-item--keyboard'>
              <h5>Keyboard</h5>
              <input onChange={keyboardSoundHandler} id='keyboard-effect__control' type='range' min={0} max={100} value={keyboardVolume*100}></input>
              <audio id='keyboard-effect__audio' src='./assets/sound/effects/audio--keyboard.mp3' hidden controls loop></audio>
            </div>
            <div className='control_panel__effect-item' id='effect-item--city'>
              <h5>City traffic</h5>
              <input type='range' min={0} max={100}></input>
            </div>
            <div className='control_panel__effect-item' id='effect-item--campfire'>
              <h5>Campfire</h5>
              <input type='range' min={0} max={100}></input>
            </div>
            <div className='control_panel__effect-item' id='effect-item--campfire'>
              <h5>Fan</h5>
              <input type='range' min={0} max={100}></input>
            </div>
            <div className='control_panel__effect-item' id='effect-item--campfire'>
              <h5>River</h5>
              <input type='range' min={0} max={100}></input>
            </div>
            <div className='control_panel__effect-item' id='effect-item--campfire'>
              <h5>Storm</h5>
              <input type='range' min={0} max={100}></input>
            </div>
            <div className='control_panel__effect-item' id='effect-item--campfire'>
              <h5>Waves</h5>
              <input type='range' min={0} max={100}></input>
            </div>
            <div className='control_panel__effect-item' id='effect-item--campfire'>
              <h5>Wind</h5>
              <input type='range' min={0} max={100}></input>
            </div>
            <div className='control_panel__effect-item' id='effect-item--campfire'>
              <h5>People</h5>
              <input type='range' min={0} max={100}></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ControlPanel