import './App.css';
import NavBar from './components/NavBar/NavBar';
// const video = require('./assets/video/backgrounds/city-corner/city-corner--day--rain.mp4')

function App() {
  return (
    <div className="App">
      {/* <video id='background--video' autoPlay loop >
        <source src={video} type="video/mp4"/>
     </video> */}
      <NavBar />
    </div>
  );
}

export default App;
