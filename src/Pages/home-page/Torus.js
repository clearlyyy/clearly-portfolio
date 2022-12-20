import React from "react"

import { MeshDistortMaterial, TorusKnot } from "@react-three/drei"
import { TorusKnotBufferGeometry } from "three"
import { useFrame } from '@react-three/fiber'


export default function Torus() {  
    const myMesh = React.useRef()
    useFrame(() => {
        myMesh.current.rotation.x +=0.001;
        myMesh.current.rotation.y +=0.001;
        //myMesh.current.rotation.z -=0.01;
    })
  return (
    <TorusKnot ref={myMesh} visible args={[1,0.4,200,200]}>
    <MeshDistortMaterial 
    color="#8352FD" 
    attach="material" 
    distort={0.4}
    speed={1.5}
    roughness={40}/>
    </TorusKnot>
  )
  
}
