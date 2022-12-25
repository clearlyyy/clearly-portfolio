import React from 'react';

import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei"
import Box from "./Box"
import Torus from "./Torus"
import Blob from "./Blob"
import {NavBtnLink2} from '../../Comps/NavBarComps';
import { FaColumns } from 'react-icons/fa';

const Home = () => {
  return (
    <div className='first-wrapper'>
      <div className='target'>
        <h1 className='HomeLogo'>Hi I'm Clearly, im a Developer</h1>
        <NavBtnLink2 className='view-btn'>View my Work</NavBtnLink2>
      </div>
      <div className="canvas-container">
      <Canvas className="three-canvas">
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={0.5}/>
        <directionalLight position={[-2,5,2]} intesity={1}/>
        <Blob/>
      </Canvas>
      </div>
      
    </div>
  );

};

export default Home;