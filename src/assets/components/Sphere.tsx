import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

const Sphere = ({
  position,
  dimesions = [1, 1, 1],
  color,
}: {
  position?: number[];
  dimesions?: number[];
  color?: string;
}) => {
  const ref = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  useFrame((state, delta) => {
    const speed = isHovered ? 1 : 0.2;
    //@ts-ignore
    ref.current.rotation.y += delta * speed;
    // console.log("delta", delta);
    // @ts-ignore

    console.log("state", state);
  });
  return (
    <mesh
      position={position}
      ref={ref}
      onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
      onPointerLeave={(event) => (event.stopPropagation(), setIsHovered(false))}
      onClick={() => setIsClicked(!isClicked)}
      scale={isClicked ? 1.5 : 1}
    >
      <sphereGeometry args={dimesions} />
      <meshStandardMaterial color={isHovered ? "orange" : color} wireframe />
    </mesh>
  );
};

export default Sphere;
