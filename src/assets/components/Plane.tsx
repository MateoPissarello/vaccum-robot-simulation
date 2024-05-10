import { Color, Euler, Vector3 } from "three";

type PlaneDimensions = [width?: number, height?: number, depth?: number];


// TODO: DISCOVER HTF TO USE PLANE GEOMETRY

const Plane = ({
  position,
  dimension,
  rotation,
  color,
}: {
  position: Vector3;
  dimension?: PlaneDimensions;
  rotation?: Euler;
  color: Color;
}) => {
  {
    console.log(position);
  }
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={dimension} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
export default Plane;
