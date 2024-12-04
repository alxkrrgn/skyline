import React from 'react';
import { Player, playerActions } from 'video-react';
import "video-react/dist/video-react.css";  // import css for styling

const VideoPlayer = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Player
        autoPlay       // Autoplay the video
        loop           // Loop the video
        muted          // Mute the video
        controls={false} // Hide time bar and controls  
        poster=""
        src={`${process.env.PUBLIC_URL}/videos/cloudsDesktop1_small.mp4`} 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <h1 style={{ color: 'white' }}>Skyline Capital</h1>
      </div>
    </div>
  );
};

export default VideoPlayer;
