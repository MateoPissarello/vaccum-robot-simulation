import { MeshWobbleMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const TorusKnot = ({
  position,
  dimesions = [1, 1, 1],
  color,
}: {
  position?: number[];
  dimesions?: number[];
  color?: string;
}) => {
  const ref = useRef();
  // useFrame((state, delta) => {
  //   //@ts-ignore
  //   ref.current.rotation.x += delta;
  //   //@ts-ignore
  //   ref.current.rotation.y += delta * 2;
  //   // console.log("delta", delta);
  //   // @ts-ignore
  //   ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;

  //   console.log("state", state);
  // });
  return (
    <mesh position={position} ref={ref}>
      <torusKnotGeometry args={dimesions} />
      {/* <meshStandardMaterial color={color} /> */}
      <MeshWobbleMaterial />
    </mesh>
  );
};

export default TorusKnot;
