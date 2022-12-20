import React from "react"

import { MeshDistortMaterial } from "@react-three/drei"


export default function Box() {
  return <mesh rotation={[90,0,20]}>
    <boxBufferGeometry attach="geometry" args={[3,3,3]}/>
    <MeshDistortMaterial color="#8352FD" attach="material" distort={0.3}/>
  </mesh>
  
}
