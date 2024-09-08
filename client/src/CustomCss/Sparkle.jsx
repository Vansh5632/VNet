import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SparkleEffect = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Create a scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Transparent background
    renderer.setSize(width, height);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Create particle system
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

    camera.position.z = 500;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // Handle resizing
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      renderer.setSize(newWidth, newHeight);
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full -z-10" // Tailwind CSS for positioning and layering
    />
  );
};

export default SparkleEffect;
