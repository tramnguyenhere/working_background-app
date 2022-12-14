import React, { useEffect } from 'react'
import { setControlPanelBoard } from '../../redux/features/backgroundSlice';
import { setSoundEffect } from '../../redux/features/soundSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import { soundEffectState } from '../../types/type';
import './ControlPanel.scss'

const ControlPanel = () => {
  const dispatch = useAppDispatch();
  const isPanelAvailable = useAppSelector((state: RootState) => state.background.background.controlPanelBoard);
  const soundEffects = useAppSelector((state: RootState)=> state.sound.soundEffects)

  
  const panelHandler = (e: any) => {
    e.preventDefault();
    dispatch(setControlPanelBoard(!isPanelAvailable))
  }

  const soundHandler = (e: any) => {
    
    const id = e.target.id
    const name = e.target.name
    const volumeValue = e.target.value / 100
    const isPlayed = volumeValue > 0
    const adjustedEffect:soundEffectState = {id: id, name:name,  play: isPlayed, volume: volumeValue}
    dispatch(setSoundEffect(adjustedEffect))
  }

  useEffect(() => {
    soundEffects.forEach(effect => {
      if (effect.volume > 0) {
        const audio = document.getElementById(effect.id+'-effect__audio') as HTMLAudioElement
        audio.play()
        audio.volume = effect.volume
      }
    })
  },[soundEffects])

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
            {soundEffects.map(effect => (
              <div className='control_panel__effect-item' id={`effect-item--${effect.id}`} key={effect.id}>
                <h5>{effect.name}</h5>
                <input name={effect.name} onChange={soundHandler} id={effect.id} type='range' min={0} max={100} value={effect.volume * 100}></input>
                <audio id={`${effect.id}-effect__audio`} src={`./assets/sound/effects/audio--${effect.id}.mp3`} hidden controls loop></audio>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ControlPanel