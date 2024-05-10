import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Cube = ({
  position,
  dimesions = [1, 1, 1],
  color,
}: {
  position: number[];
  dimesions?: number[];
  color: string;
}) => {
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, "wood_texture.png");
  useFrame((state, delta) => {
    //@ts-ignore
    // ref.current.rotation.x += delta;
    //@ts-ignore
    // ref.current.rotation.y += delta * 2;
    // console.log("delta", delta);
    // @ts-ignore
    // ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;

    console.log("state", state);
  });
  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={dimesions} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default Cube;
