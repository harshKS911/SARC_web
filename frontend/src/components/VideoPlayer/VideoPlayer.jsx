import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/sunset.mp4'
const VideoPlayer = ({playState,setPlayState}) => {

  const player= useRef(null);

const closePlayer =(e)=>{
    if(e.target=== player.current){
        setPlayState(false);
    }
}

  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player}
    onClick={closePlayer}>
      <a href="https://youtu.be/HidV-04e-ms" target="_blank" > click here to watch Alumination2023 afterMovie  </a>
      
    </div>
  )
}

export default VideoPlayer
