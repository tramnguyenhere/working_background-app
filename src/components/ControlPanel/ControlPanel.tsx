import React from 'react'
import './ControlPanel.scss'

const ControlPanel = () => {

  return (
    <div className='control_panel__wrapper'>
      <button><i className="fa-solid fa-window-minimize" id='btn--minimize'></i></button>
      <div className='control_panel__mood-section'>
        <h4>Mood</h4>
        <div className='control_panel__mood-list'>
          <button className='control_panel__mood-item'><i className="fa-sharp fa-solid fa-moon"></i>Sleepy</button>
          <button className='control_panel__mood-item'><i className="fa-solid fa-guitar"></i>Jazzy</button>
          <button className='control_panel__mood-item'><i className="fa-solid fa-cookie-bite"></i>Chill</button>
        </div>
      </div>
      <div className='control_panel__mood-section'>
        <h4>Sound</h4>
        <div className='control_panel__mood-list'>
          <button className='control_panel__mood-item'><i className="fa-sharp fa-solid fa-moon"></i>Sleepy</button>
          <button className='control_panel__mood-item'><i className="fa-solid fa-guitar"></i>Jazzy</button>
          <button className='control_panel__mood-item'><i className="fa-solid fa-cookie-bite"></i>Chill</button>
        </div>
      </div>
    </div>
  )
}

export default ControlPanel