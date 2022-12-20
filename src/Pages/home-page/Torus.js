import React from "react"

import { MeshDistortMaterial, TorusKnot } from "@react-three/drei"
import { TorusKnotBufferGeometry } from "three"


export default function Torus() {
  return (
    <TorusKnot visible args={[1,0.4,200,200]}>
    <MeshDistortMaterial 
    color="#8352FD" 
    attach="material" 
    distort={0.4}
    speed={1.5}
    roughness={40}/>
    </TorusKnot>
  )
  
}
