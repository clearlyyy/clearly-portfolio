import React from 'react';

import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei"
import Box from "./Box"
import Torus from "./Torus"

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
      }}
    >
      <h1 className='HomeLogo'>Hi I'm Clearly</h1>
      <div className="canvas-container">
      <Canvas className="three-canvas">
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={0.5}/>
        <directionalLight position={[-2,5,2]} intesity={1}/>
        <Torus/>
      </Canvas>
      </div>
      
    </div>
  );
};

export default Home;