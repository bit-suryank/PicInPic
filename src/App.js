import { useRef } from 'react';
import './App.css';
import usePictureInPicture from 'react-use-pip';


function App() {
  const viRef = useRef(null);
  const {
    isPictureInPictureActive,
    isPictureInPictureAvailable,
    togglePictureInPicture,
  } = usePictureInPicture(viRef)
  
  
  return (
    <div className="App">
      <video ref={viRef} id="pip-object">
        <source src="public/[Anime Time] Mashle - 04 [1080p][HEVC 10bit x265][AAC][Multi Sub].mkv"/>
      </video>
        {
          isPictureInPictureAvailable && (
            <button onClick={() => togglePictureInPicture(!isPictureInPictureActive)}>Press To Enable PIP</button>
          )
        }
    </div>
  );
}

export default App;
