import { OrbitControls, useHelper } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";
import Plane from "./Plane";

import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Vector3 } from "three";
import Cube from "./Cube";
import Store from "./Store";
const initPlanePosition = new Vector3(0, 0, 0);
const greenColor = new THREE.Color("green");
const planeRotation = new THREE.Euler(90, 180, 0);
const Scene = () => {
  const directionalLightRef = useRef<Mesh>(null!);
  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 0.5, "white");
  return (
    <>
      <directionalLight
        position={[0, 1, 2]}
        intensity={0.5}
        ref={directionalLightRef}
      />
      <ambientLight intensity={0.1} />
      <Cube color="orange" position={[0, 0, 0]} dimesions={[20,0.1,20]} />
      {/* <Plane
        color={greenColor}
        dimension={[20, 20]}
        position={initPlanePosition}
        rotation={planeRotation}
      /> */}
      <OrbitControls enableZoom={true} />
      <gridHelper args={[50, 50]} />
    </>
  );
};

export default Scene;
