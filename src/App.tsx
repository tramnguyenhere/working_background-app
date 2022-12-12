import { useEffect } from 'react';
import './App.scss';
import ControlPanel from './components/ControlPanel/ControlPanel';
import NavBar from './components/NavBar/NavBar';
import TimeDetails from './components/TimeDetails/TimeDetails';
import { useAppSelector } from './redux/hooks';
import { RootState } from './redux/store';

function App() {
  const isNight = useAppSelector((state: RootState) => state.background.background.nightMode) //true is night, false is day
  const isRainy = useAppSelector((state: RootState) => state.background.background.rainMode) //true is rainy, false is sunny
  const isPlaying = useAppSelector((state: RootState) => state.sound.songState)
  const istimeDetailsAvailable = useAppSelector((state:RootState)=> state.background.background.timeDetails)
  const isPanelAvailable = useAppSelector((state: RootState) => {return state.background.background.controlPanelBoard });
  
  useEffect(() => {
    const nightRainElement = document.getElementById('background--video-night_rain')!;
    const nightElement = document.getElementById('background--video-night')!;
    const dayRainElement = document.getElementById('background--video-day_rain')!;
    const dayElement = document.getElementById('background--video-day')!;
    const chillSongElement = document.getElementById('song--chill') as HTMLAudioElement;
    
    if (isPlaying) {
      chillSongElement!.play()
    } else {
      chillSongElement!.pause()
    }

    if (isNight && isRainy) {
      nightRainElement.style.opacity = '1';
      nightElement.style.opacity = '0';
      dayRainElement.style.opacity = '0';
      dayElement.style.opacity = '0';
    } else if (isNight) {
      nightElement.style.opacity = '1';
      nightRainElement.style.opacity = '0';
      dayRainElement.style.opacity = '0';
      dayElement.style.opacity = '0';
    } else if (isRainy) {
      dayRainElement.style.opacity = '1';
      nightElement.style.opacity = '0';
      nightRainElement.style.opacity = '0';
      dayElement.style.opacity = '0';
    } else {
      dayElement.style.opacity = '1';
      dayRainElement.style.opacity = '0';
      nightElement.style.opacity = '0';
      nightRainElement.style.opacity = '0';
    }
  }, [isNight, isRainy, isPlaying]);
  
  return (
    <div className="App">
      <video className={`background__video`} id='background--video-night_rain' autoPlay muted loop >
        <source src='./assets/video/backgrounds/city-corner/city-corner--night--rain.mp4' type="video/mp4"/>
     </video>
      <video className={`background__video`} id='background--video-night' autoPlay muted loop >
        <source src='./assets/video/backgrounds/city-corner/city-corner--night--no-rain.mp4' type="video/mp4"/>
     </video>
      <video className={`background__video`} id='background--video-day_rain' autoPlay muted loop >
        <source src='./assets/video/backgrounds/city-corner/city-corner--day--rain.mp4' type="video/mp4"/>
     </video>
      <video className={`background__video`} id='background--video-day' autoPlay muted loop >
        <source src='./assets/video/backgrounds/city-corner/city-corner--day--no-rain.mp4' type="video/mp4"/>
      </video>
      <audio src="./assets/sound/songs/bg-song--sleepy.mp3" id='song--chill' autoPlay loop hidden />
      <NavBar />
      {istimeDetailsAvailable && <TimeDetails />}
      {isPanelAvailable && <ControlPanel />}
    </div>
  );
}

export default App;
