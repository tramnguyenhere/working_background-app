import React, { useEffect } from 'react'
import { setControlPanelBoard } from '../../redux/features/backgroundSlice';
import { setCampfireEffect, setCityEffect, setFanEffect, setKeyboardEffect, setPeopleEffect, setRainEffect, setRiverEffect, setStormEffect, setWavesEffect, setWindEffect } from '../../redux/features/soundSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import './ControlPanel.scss'

const ControlPanel = () => {
  const dispatch = useAppDispatch();
  const isPanelAvailable = useAppSelector((state: RootState) => state.background.background.controlPanelBoard);
  const {
    keyboardVolume,
    cityTrafficVolume,
    campfireVolume,
    fanVolume,
    wavesVolume,
    windVolume,
    riverVolume,
    peopleVolume,
    stormVolume,
    rainVolume
  } = useAppSelector((state: RootState)=> state.sound.soundEffect)

  const keyboardAudio = document.getElementById("keyboard-effect__audio") as HTMLAudioElement;
  const rainAudio = document.getElementById("rain-effect__audio") as HTMLAudioElement;
  const cityAudio = document.getElementById("city-effect__audio") as HTMLAudioElement;
  const campfireAudio = document.getElementById("campfire-effect__audio") as HTMLAudioElement;
  const fanAudio = document.getElementById("fan-effect__audio") as HTMLAudioElement;
  const wavesAudio = document.getElementById("waves-effect__audio") as HTMLAudioElement;
  const windAudio = document.getElementById("wind-effect__audio") as HTMLAudioElement;
  const peopleAudio = document.getElementById("people-effect__audio") as HTMLAudioElement;
  const riverAudio = document.getElementById("river-effect__audio") as HTMLAudioElement;
  const stormAudio = document.getElementById("storm-effect__audio") as HTMLAudioElement;

  const panelHandler = (e: any) => {
    e.preventDefault();
    dispatch(setControlPanelBoard(!isPanelAvailable))
  }
console.log(rainVolume);

  const soundHandler = (e: any) => {
    const id = e.target.id
    const volumeValue = e.target.value / 100

    switch (id) {
      case 'rain-effect__control':
        dispatch(setRainEffect(volumeValue));
        break
      case 'keyboard-effect__control':
        dispatch(setKeyboardEffect(volumeValue));
        break
      case 'city-effect__control':
        dispatch(setCityEffect(volumeValue))
        break
      case 'campfire-effect__control':
        dispatch(setCampfireEffect(volumeValue))
        break
      case 'fan-effect__control':
        dispatch(setFanEffect(volumeValue))
        break
      case 'river-effect__control':
        dispatch(setRiverEffect(volumeValue))
        break
      case 'storm-effect__control':
        dispatch(setStormEffect(volumeValue))
        break
      case 'waves-effect__control':
        dispatch(setWavesEffect(volumeValue))
        break
      case 'wind-effect__control':
        dispatch(setWindEffect(volumeValue))
        break
      case 'people-effect__control':
        dispatch(setPeopleEffect(volumeValue))
        break
      default:
        return 'Unknown'
    }
  }

  useEffect(() => {
    if (keyboardVolume > 0) {
      keyboardAudio.play()
      keyboardAudio.volume = keyboardVolume
    } 
    if (rainVolume > 0) {
      rainAudio.play()
      rainAudio.volume = rainVolume
    } 
    if (cityTrafficVolume > 0) {
      cityAudio.play()
      cityAudio.volume = cityTrafficVolume
    } 
    if (campfireVolume > 0) {
      campfireAudio.play()
      campfireAudio.volume = campfireVolume
    } 
    if (fanVolume > 0) {
      fanAudio.play()
      fanAudio.volume = fanVolume
    } 
    if (wavesVolume > 0) {
      wavesAudio.play()
      wavesAudio.volume = wavesVolume
    } 
    if (windVolume > 0) {
      windAudio.play()
      windAudio.volume = windVolume
    } 
    if (riverVolume > 0) {
      riverAudio.play()
      riverAudio.volume = riverVolume
    } 
    if (peopleVolume > 0) {
      peopleAudio.play()
      peopleAudio.volume = peopleVolume
    } 
    if (stormVolume > 0) {
      stormAudio.play()
      stormAudio.volume = stormVolume
    } 
  },[campfireAudio, campfireVolume, cityAudio, cityTrafficVolume, fanAudio, fanVolume, keyboardAudio, keyboardVolume, peopleAudio, peopleVolume, rainAudio, rainVolume, riverAudio, riverVolume, stormAudio, stormVolume, wavesAudio, wavesVolume, windAudio, windVolume])

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
            <div className='control_panel__effect-item' id='effect-item--rain'>
              <h5>Rain</h5>
              <input onChange={soundHandler} id='rain-effect__control' type='range' min={0} max={100} value={rainVolume*100}></input>
              <audio id='rain-effect__audio' src='./assets/sound/effects/audio--rain_city.mp3' hidden controls loop></audio>
            </div>
            <div className='control_panel__effect-item' id='effect-item--keyboard'>
              <h5>Keyboard</h5>
              <input onChange={soundHandler} id='keyboard-effect__control' type='range' min={0} max={100} value={keyboardVolume*100}></input>
              <audio id='keyboard-effect__audio' src='./assets/sound/effects/audio--keyboard.mp3' hidden controls loop></audio>
            </div>
            <div className='control_panel__effect-item' id='effect-item--city'>
              <h5>City traffic</h5>
              <input onChange={soundHandler} id='city-effect__control' type='range' min={0} max={100} value={cityTrafficVolume*100}></input>
              <audio id='city-effect__audio' src='./assets/sound/effects/audio--city_traffic.mp3' hidden controls loop></audio>
            </div>
            <div className='control_panel__effect-item' id='effect-item--campfire'>
              <h5>Campfire</h5>
              <input onChange={soundHandler} id='campfire-effect__control' type='range' min={0} max={100} value={campfireVolume*100}></input>
              <audio id='campfire-effect__audio' src='./assets/sound/effects/audio--campfire.mp3' hidden controls loop></audio>
            </div>
            <div className='control_panel__effect-item' id='effect-item--fan'>
              <h5>Fan</h5>
              <input  onChange={soundHandler} id='fan-effect__control' type='range' min={0} max={100} value={fanVolume*100}></input>
              <audio id='fan-effect__audio' src='./assets/sound/effects/audio--fan.mp3' hidden controls loop></audio>
            </div>
            <div className='control_panel__effect-item' id='effect-item--river'>
              <h5>River</h5>
              <input onChange={soundHandler} id='river-effect__control' type='range' min={0} max={100} value={riverVolume*100}></input>
              <audio id='river-effect__audio' src='./assets/sound/effects/audio--river.mp3' hidden controls loop></audio>
            </div>
            <div className='control_panel__effect-item' id='effect-item--storm'>
              <h5>Storm</h5>
              <input onChange={soundHandler} id='storm-effect__control' type='range' min={0} max={100} value={stormVolume*100}></input>
              <audio id='storm-effect__audio' src='./assets/sound/effects/audio--storm.mp3' hidden controls loop></audio>
            </div>
            <div className='control_panel__effect-item' id='effect-item--waves'>
              <h5>Waves</h5>
              <input onChange={soundHandler} id='waves-effect__control' type='range' min={0} max={100} value={wavesVolume*100}></input>
              <audio id='waves-effect__audio' src='./assets/sound/effects/audio--waves.mp3' hidden controls loop></audio>
            </div>
            <div className='control_panel__effect-item' id='effect-item--wind'>
              <h5>Wind</h5>
              <input onChange={soundHandler} id='wind-effect__control' type='range' min={0} max={100} value={windVolume*100}></input>
              <audio id='wind-effect__audio' src='./assets/sound/effects/audio--wind.mp3' hidden controls loop></audio>
            </div>
            <div className='control_panel__effect-item' id='effect-item--people'>
              <h5>People</h5>
              <input onChange={soundHandler} id='people-effect__control' type='range' min={0} max={100} value={peopleVolume*100}></input>
              <audio id='people-effect__audio' src='./assets/sound/effects/audio--people.mp3' hidden controls loop></audio>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ControlPanel