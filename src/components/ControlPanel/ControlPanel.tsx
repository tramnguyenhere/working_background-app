import { useEffect } from 'react'
import { setControlPanelBoard } from '../../redux/features/backgroundSlice';
import { setSoundEffect, setMoodSong } from '../../redux/features/soundSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';

import './ControlPanel.scss'

// ControlPanel component is used to control song and sound effects.
const ControlPanel = () => {
  const dispatch = useAppDispatch();

  const controlPanelCard = document.getElementById('draggable')
  
  controlPanelCard !== null && controlPanelCard!.addEventListener('mousedown', (e:any) => {
    var card = e.target;
    
    // Calculate offset
    var offsetX = e.clientX - card.offsetLeft;
    var offsetY = e.clientY - card.offsetTop;
    
    // Move card
    var moveCard = (e:any) => {
    card.style.left = (e.clientX - offsetX) + 'px';
    card.style.top = (e.clientY - offsetY) + 'px';
    }
    
    // Drop card
    var dropCard = (e:any) => {
    document.removeEventListener('mousemove', moveCard);
    document.removeEventListener('mouseup', dropCard);
    }
    // Listen for mousemove and mouseup events
    document.addEventListener('mousemove', moveCard);
    document.addEventListener('mouseup', dropCard);
    
    });

  // Get the data of the visibility of panel from Redux store
  const isPanelAvailable = useAppSelector(
    (state: RootState) => state.background.background
  ).find(mode => mode.id === 'controlPanelBoard')?.isOn;

  // Get the data of sound effects from Redux store
  const soundEffects = useAppSelector(
    (state: RootState) => state.sound.soundEffects
  );

  // Get the data of song based on mood from Redux store
  const moodSongs = useAppSelector(
    (state: RootState) => state.sound.moodSong
  );

  // Get the data of song state from Redux store
  const isPlaying = useAppSelector((state: RootState) => state.sound.songState)

  const panelVisibilityHandler = (e: any) => {
    e.preventDefault();
    dispatch(setControlPanelBoard(!isPanelAvailable));
  }
  // Function is called when click buttons
  const handleClick = (e: any) => {
    e.preventDefault();
    const id = e.target.id
    const name = e.target.name;

    //Get the right function for each button based on button's id
    if (id === 'chill' || id === 'sleepy' || id === 'jazzy') {

      // Check whether the selected song is played
      const isPlayed = moodSongs.find(song => song.id === id)?.isPlayed

      // An array of unselected songs
      const isNotClickedSongs = moodSongs.filter(song => song.id !== id)
      
      // Play the selected song and ensure the other songs are turned off
      if (!isPlayed) {
        isNotClickedSongs.forEach(song=>dispatch(setMoodSong({id: song.id,name: song.name, isPlayed: false})))
        dispatch(setMoodSong({id,name,isPlayed: true}))
      }
    } else {

      /**
       * The volume is set from 0 to 1, to make it user-friendly, it is set 0-100 on screen.
       * Therefore, it must be devided by 100 again to set in volume
       */
      const volumeValue = parseInt(e.target.value, 10) / 100;
      const adjustedEffect = { id, name, volume: volumeValue };
      
      //Update the volume of a sound effect with corresponding id
      dispatch(setSoundEffect(adjustedEffect));
    }
  };

  // Listen for changes in the soundEffects state and update the audio elements accordingly.
  useEffect(() => {
    soundEffects.forEach(effect => {

      // Get the audio HTML element for each effect
      const audio = document.getElementById(effect.id + '-effect__audio') as
        HTMLAudioElement
      
      // Set the audio play or pause based on volume value
      effect.volume > 0 ? audio.play() : audio.pause()

      // Set the volume of the audio from the volume value in store
      audio.volume = effect.volume
    })

    moodSongs.forEach(song => {

      // Get the audio HTML element for each song
      const audio = document.getElementById('song--'+song.id) as
        HTMLAudioElement
      
      // Set the audio play or pause based on store value
      (song.isPlayed && isPlaying) ? audio.play() : audio.pause()

      // Set the volume of the audio to maximum
      audio.volume=1
    })
  },[isPlaying, moodSongs, soundEffects])

  return (
    <div id='draggable' className={`control_panel__wrapper ${!isPanelAvailable && 'hidden'}`}>
      <button onClick={panelVisibilityHandler} id='btn--minimize'>
        <i className="fa-solid fa-window-minimize"/>
      </button>
      <div className='control_panel'>
        <div id='control_panel__mood-section'>
          <h4>Mood</h4>
          <div id='control_panel__mood-list'>
            {moodSongs.map(song => (
            <button onClick={handleClick} key={song.id} id={song.id} className={`control_panel__mood-item ${song.isPlayed && 'mood--active'}`}>
              <i className={`fa-solid fa-${song.icon}`} />
                {song.name}
              <audio id={`song--${song.id}`} src={`./assets/sound/songs/bg-song--${song.id}.mp3`} hidden controls loop />
            </button>
            ))}
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