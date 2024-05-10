import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Torus = ({
  position,
  dimesions = [1, 1, 1],
  color,
}: {
  position?: number[];
  dimesions?: number[];
  color?: string;
}) => {
  return (
    <mesh position={position}>
      <torusGeometry args={dimesions} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Torus;
