import React, { useEffect } from 'react';
import * as THREE from 'three';

const VideoTextureComponent = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create video element
    const video = document.createElement('video');
    video.src = `${process.env.PUBLIC_URL}/videos/BlueStocks204306-923909642_small.mp4`;
    video.load();
    video.play();
    const texture = new THREE.VideoTexture(video);

    // Create a material with video texture
    const material = new THREE.MeshBasicMaterial({ map: texture });

    // Create a geometry and apply the material
    const geometry = new THREE.PlaneGeometry(5, 5);
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    camera.position.z = 10;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      plane.rotation.x += 0.01;
      plane.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return null;
};

export default VideoTextureComponent;
