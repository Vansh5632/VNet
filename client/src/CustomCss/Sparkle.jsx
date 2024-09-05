import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SparkleEffect = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Create particles
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    for (let i = 0; i < 1000; i++) {
      vertices.push(
        (Math.random() - 0.5) * 2000, // x
        (Math.random() - 0.5) * 2000, // y
        (Math.random() - 0.5) * 2000  // z
      );
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    const material = new THREE.PointsMaterial({ color: 0xffffff, size: 1 });
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Camera position
    camera.position.z = 500;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />;
};

export default SparkleEffect;
