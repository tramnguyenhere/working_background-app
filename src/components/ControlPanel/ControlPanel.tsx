import { useEffect } from 'react'
import { setControlPanelBoard } from '../../redux/features/backgroundSlice';
import { setSoundEffect } from '../../redux/features/soundSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';

import './ControlPanel.scss'

// ControlPanel component that is used to control song and sound effects.

const ControlPanel = () => {
  const dispatch = useAppDispatch();
  const isPanelAvailable = useAppSelector(
    (state: RootState) => state.background.background
  ).find(mode => mode.id === 'controlPanelBoard')?.isOn;
  const soundEffects = useAppSelector(
    (state: RootState) => state.sound.soundEffects
  );

  const handleClick = (e: any) => {
    e.preventDefault();
    const id = e.target.id
    const name = e.target.name;
    
    if (id === 'btn--minimize') {
      dispatch(setControlPanelBoard(!isPanelAvailable));
    } else {
      const volumeValue = parseInt(e.target.value, 10) / 100;
      const adjustedEffect = { id, name, volume: volumeValue };
      dispatch(setSoundEffect(adjustedEffect));
    }
  };

/** The component uses the useEffect hook from React to listen for changes 
to the soundEffects state and update the audio elements accordingly.  */
  useEffect(() => {
    soundEffects.forEach(effect => {
      const audio = document.getElementById(effect.id + '-effect__audio') as
        HTMLAudioElement
      effect.volume > 0 ? audio.play() : audio.pause()
      audio.volume = effect.volume
    })
  },[soundEffects])

  return (
    <div className={`control_panel__wrapper ${!isPanelAvailable && 'hidden'}`}>
      <button onClick={handleClick} id='btn--minimize'>
        <i className="fa-solid fa-window-minimize"></i>
      </button>
      <div className='control_panel'>
        <div id='control_panel__mood-section'>
          <h4>Mood</h4>
          <div id='control_panel__mood-list'>
            <button className='control_panel__mood-item'>
              <i className="fa-sharp fa-solid fa-moon"></i>
              Sleepy
            </button>
            <button className='control_panel__mood-item'>
              <i className="fa-solid fa-guitar"></i>
              Jazzy
            </button>
            <button className='control_panel__mood-item'>
              <i className="fa-solid fa-cookie-bite"></i>
              Chill
            </button>
          </div>
        </div>
        <div id='control_panel__effect-section'>
          <h4>Sound</h4>
          <div id='control_panel__effect-list'>
            {soundEffects.map(effect => (
              <div className='control_panel__effect-item' id={`effect-item--${effect.id}`} key={effect.id}>
                <h5>{effect.name}</h5>
                <input name={effect.name} onChange={handleClick} id={effect.id} type='range' min={0} max={100} value={effect.volume * 100} />
                <audio id={`${effect.id}-effect__audio`} src={`./assets/sound/effects/audio--${effect.id}.mp3`} hidden controls loop />
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ControlPanel