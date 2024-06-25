import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";

export default function Car() {
  const mesh = useRef();
  const { nodes, materials  } = useGLTF("/models/gg.glb");
  const { viewport } = useThree();




  const meshNodes = [
    { geometry: nodes.Body_Paint_Body_Paint_0.geometry, material: materials.Body_Paint, position: [0, 70.801, -31.298], rotation: [-Math.PI / 2, 0, 0] },
    { geometry: nodes.Glass_Body_Glass_0.geometry, material: materials.Body_Glass, position: [0, 70.801, -31.298], rotation: [-Math.PI / 2, 0, 0] },
    { geometry: nodes.Glass_Body_Glass_Orange_0.geometry, material: materials.Body_Glass_Orange, position: [0, 70.801, -31.298], rotation: [-Math.PI / 2, 0, 0] },
    { geometry: nodes.Glass_Body_Glass_Red_0.geometry, material: materials.Body_Glass_Red, position: [0, 70.801, -31.298], rotation: [-Math.PI / 2, 0, 0] },
    { geometry: nodes.Wheel_FL_Body_Alloy_0.geometry, material: materials.Body_Alloy, position: [75.387, 33.061, 124.364], rotation: [-Math.PI / 2, 0, 0] },
    { geometry: nodes.Wheel_FL_Body_Plastic_0.geometry, material: materials.Body_Plastic, position: [75.387, 33.061, 124.364], rotation: [-Math.PI / 2, 0, 0] },
    { geometry: nodes.Wheel_FL_Body_Chrome_0.geometry, material: materials.Body_Chrome, position: [75.387, 33.061, 124.364], rotation: [-Math.PI / 2, 0, 0] },
    { geometry: nodes.Wheel_FL_Tire_0.geometry, material: materials.Tire, position: [75.387, 33.061, 124.364], rotation: [-Math.PI / 2, 0, 0] },
    { geometry: nodes.Wheel_FL_Textures_0.geometry, material: materials.Textures, position: [75.387, 33.061, 124.364], rotation: [-Math.PI / 2, 0, 0] },
    { geometry: nodes.Details_Textures_0.geometry, material: materials.Textures, position: [0, 70.801, -31.298], rotation: [-Math.PI / 2, 0, 0] },
    { geometry: nodes.Details_Body_Plastic_0.geometry, material: materials.Body_Plastic, position: [0, 70.801, -31.298], rotation: [-Math.PI / 2, 0, 0] },
    { geometry: nodes.Details_Body_Chrome_0.geometry, material: materials.Body_Chrome, position: [0, 70.801, -31.298], rotation: [-Math.PI / 2, 0, 0] },
    { geometry: nodes.Details_Body_Paint_0.geometry, material: materials.Body_Paint, position: [0, 70.801, -31.298], rotation: [-Math.PI / 2, 0, 0] },
    { geometry: nodes.Wheel_RL_Body_Alloy_0.geometry, material: materials.Body_Alloy, position: [75.387, 33.061, -128.083], rotation: [-Math.PI / 2, 0, 0] },
    { geometry: nodes.Wheel_RL_Body_Plastic_0.geometry, material: materials.Body_Plastic, position: [75.387, 33.061, -128.083], rotation: [-Math.PI / 2, 0, 0] },
    { geometry: nodes.Wheel_RL_Body_Chrome_0.geometry, material: materials.Body_Chrome, position: [75.387, 33.061, -128.083], rotation: [-Math.PI / 2, 0, 0] },
    { geometry: nodes.Wheel_RL_Tire_0.geometry, material: materials.Tire, position: [75.387, 33.061, -128.083], rotation: [-Math.PI / 2, 0, 0] },
    { geometry: nodes.Wheel_RL_Textures_0.geometry, material: materials.Textures, position: [75.387, 33.061, -128.083], rotation: [-Math.PI / 2, 0, 0] },
    { geometry: nodes.Wheel_FR_Body_Alloy_0.geometry, material: materials.Body_Alloy, position: [-76.433, 33.061, 124.364], rotation: [-Math.PI / 2, 0, 0] },
    { geometry: nodes.Wheel_FR_Body_Plastic_0.geometry, material: materials.Body_Plastic, position: [-76.433, 33.061, 124.364], rotation: [-Math.PI / 2, 0, 0] },
    { geometry: nodes.Wheel_FR_Body_Chrome_0.geometry, material: materials.Body_Chrome, position: [-76.433, 33.061, 124.364], rotation: [-Math.PI / 2, 0, 0] },
    { geometry: nodes.Wheel_FR_Tire_0.geometry, material: materials.Tire, position: [-76.433, 33.061, 124.364], rotation: [-Math.PI / 2, 0, 0] },
    { geometry: nodes.Wheel_FR_Textures_0.geometry, material: materials.Textures, position: [-76.433, 33.061, 124.364], rotation: [-Math.PI / 2, 0, 0] },
    { geometry: nodes.Wheel_RR_Body_Alloy_0.geometry, material: materials.Body_Alloy, position: [-76.433, 33.061, -128.083], rotation: [-Math.PI / 2, 0, 0] },
    { geometry: nodes.Wheel_RR_Body_Plastic_0.geometry, material: materials.Body_Plastic, position: [-76.433, 33.061, -128.083], rotation: [-Math.PI / 2, 0, 0] },
    { geometry: nodes.Wheel_RR_Body_Chrome_0.geometry, material: materials.Body_Chrome, position: [-76.433, 33.061, -128.083], rotation: [-Math.PI / 2, 0, 0] },
    { geometry: nodes.Wheel_RR_Tire_0.geometry, material: materials.Tire, position: [-76.433, 33.061, -128.083], rotation: [-Math.PI / 2, 0, 0] },
    { geometry: nodes.Wheel_RR_Textures_0.geometry, material: materials.Textures, position: [-76.433, 33.061, -128.083], rotation: [-Math.PI / 2, 0, 0] },
    { geometry: nodes.Shadow_Shadow_0.geometry, material: materials.Shadow, position: [0.001, 0, 3.198], rotation: [-Math.PI / 2, 0, 0] },
    { geometry: nodes.Perfect_Black_Perfect_Black_0.geometry, material: materials.Perfect_Black, position: [0, 70.801, -31.298], rotation: [-Math.PI / 2, 0, 0] },
    { geometry: nodes.Caliper_FL_Textures_0.geometry, material: materials.Textures, position: [75.518, 35.814, 138.252], rotation: [-Math.PI / 2, 0, 0] },
    { geometry: nodes.Caliper_RL_Textures_0.geometry, material: materials.Textures, position: [75.518, 35.814, -114.196], rotation: [-Math.PI / 2, 0, 0] },
    { geometry: nodes.Caliper_RR_Textures_0.geometry, material: materials.Textures, position: [-76.565, 35.814, -114.196], rotation: [-Math.PI / 2, 0, 0] },
    { geometry: nodes.Caliper_FR_Textures_0.geometry, material: materials.Textures, position: [-76.565, 35.814, 138.252], rotation: [-Math.PI / 2, 0, 0] },
  ];

  return (


    <group ref={mesh}  scale={0.003} >
     {meshNodes.map((node, index) => (
        <mesh
          key={index}
          castShadow
          receiveShadow
          geometry={node.geometry}
          material={node.material}
          position={node.position}
          rotation={node.rotation}
        />
      ))}
      
    </group>
  );
}