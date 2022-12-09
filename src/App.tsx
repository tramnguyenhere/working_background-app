import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { useAppSelector } from './redux/hooks';
import { RootState } from './redux/store';

function App() {
  const [videoBackground, setVideoBackground] = useState('./assets/video/backgrounds/city-corner/city-corner--day--no-rain.mp4')
  const isNight = useAppSelector((state: RootState) => state.background.background.nightMode) //true is night, false is day
  const isRainy = useAppSelector((state: RootState) => state.background.background.rainMode) //true is rainy, false is sunny


  useEffect(() => {
    if (isNight===true && isRainy===true) {
      setVideoBackground('./assets/video/backgrounds/city-corner/city-corner--night--rain.mp4')
    } else if (isNight === true && isRainy === false) {
     setVideoBackground('./assets/video/backgrounds/city-corner/city-corner--night--no-rain.mp4')
    } else if (isNight === false && isRainy === true) {
     setVideoBackground('./assets/video/backgrounds/city-corner/city-corner--day--rain.mp4')
    } else {
     setVideoBackground('./assets/video/backgrounds/city-corner/city-corner--day--no-rain.mp4')
    }
  },[isNight, isRainy])

  return (
    <div className="App">
      <video id='background--video' autoPlay loop >
        <source src={videoBackground} type="video/mp4"/>
     </video>
      <NavBar />
    </div>
  );
}

export default App;
