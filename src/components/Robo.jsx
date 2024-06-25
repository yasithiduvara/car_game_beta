import { MeshTransmissionMaterial, Text, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import React, { useRef } from "react";

export default function Robo() {
  const mesh = useRef();
  const { nodes } = useGLTF("/models/robo.glb");
  const { viewport } = useThree();

  useFrame(() => {
    mesh.current.rotation.y += 0.02;
  });


  const meshNodes = [
    nodes.Cylinder003,
    nodes.Cylinder003_1,
    nodes.Cylinder003_2,
    nodes.Cylinder003_3,
    nodes.Cylinder003_4,
    nodes.Cylinder003_5,
    nodes.Cylinder003_6,
    nodes.Cylinder003_7,
  ];

  return (


    <group ref={mesh} >
      {meshNodes.map((node, index) => (
      <mesh key={index} {...node} >
      </mesh>
     ))}
      
    </group>
  );
}