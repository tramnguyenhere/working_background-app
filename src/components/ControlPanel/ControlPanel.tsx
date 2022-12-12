import React from 'react'
import { setControlPanelBoard } from '../../redux/features/backgroundSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import './ControlPanel.scss'

const ControlPanel = () => {
  const dispatch = useAppDispatch();
  const isPanelAvailable = useAppSelector((state: RootState) => state.background.background.controlPanelBoard);
  
  const panelHandler = (e: any) => {
    e.preventDefault();
    dispatch(setControlPanelBoard(!isPanelAvailable))
  }

  return (
    <div className='control_panel__wrapper' draggable>
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
              <input type='range' min={0} max={100}></input>
            </div>
            <div className='control_panel__effect-item' id='effect-item--city'>
              <h5>City traffic</h5>
              <input type='range' min={0} max={100}></input>
            </div>
            <div className='control_panel__effect-item' id='effect-item--campfire'>
              <h5>Campfire</h5>
              <input type='range' min={0} max={100}></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ControlPanel