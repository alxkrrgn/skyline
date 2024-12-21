// src/components/VideoBgThreeFiber.js
import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { VideoTexture } from 'three';

const VideoBg3F = () => {
  const videoRef = useRef(null);             // Correctly initialize useRef for video
  const [texture, setTexture] = useState(null);  // Use useState for setting texture

  useEffect(() => {
    if (videoRef.current) {
      // Wait for the video to load before creating VideoTexture
      const handleLoadedData = () => {
        const videoTexture = new VideoTexture(videoRef.current);
        setTexture(videoTexture);
      };

      videoRef.current.addEventListener('loadeddata', handleLoadedData);

      // Cleanup
      return () => {
        videoRef.current.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, []);

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      <video
        ref={videoRef}
        src={`${process.env.PUBLIC_URL}/videos/BlueStocks204306-923909642_small.mp4`}
        autoPlay
        loop
        muted
        playsInline
        style={{ display: 'none' }}
      />
      <Canvas>
        {texture && (
          <mesh>
            <planeBufferGeometry args={[5, 3]} />
            <meshBasicMaterial map={texture} />
          </mesh>
        )}
      </Canvas>
    </div>
  );
};

export default VideoBg3F;

