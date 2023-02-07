import React from 'react';

import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei"
import Box from "./Box"
import Torus from "./Torus"
import Blob from "./Blob"
import {NavBtnLink2} from '../../Comps/NavBarComps';
import { FaColumns } from 'react-icons/fa';
import {useState} from 'react';


const Home = () => {
	const [move, setMove] = useState(false);
	const [moveThree, setMoveThree] = useState(false);
	const [visible, setVisible] = useState(true);
	function HandleClickEvent() {
		console.log("View Work")
		setMove(true);
		setMoveThree(true);

		setTimeout(() => {
			setVisible(false);
		},900);
		//setMove(true);
		//setTimeout(() => setMove(false), 2000);
		
	}

  return (	 
	<div>
    <div className={visible ? 'first-wrapper' : 'invisible'}>
      <div className={move ? 'moveAnim' : 'host-wrapper'} id="wrapperhost">
        <h1 className='HomeLogo'>Hi I'm Clearly, im a Developer</h1>
        <NavBtnLink2 onClick={() => HandleClickEvent()} className='view-btn' id='view-work'>View my Work</NavBtnLink2>
      </div>
	<div className={moveThree ? 'moveAnimThree' : ''}>
      <div className="canvas-container">
      <Canvas className="three-canvas">
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={0.5}/>
        <directionalLight position={[-2,5,2]} intesity={1}/>
        <Blob/>
      </Canvas>
      </div>
	  </div>
    </div>
	  </div>
  );

};

export default Home;
