import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Cube from "./assets/components/Cube";
import Scene from "./assets/components/Scene";
import Sphere from "./assets/components/Sphere";
import Torus from "./assets/components/Torus";
import TorusKnot from "./assets/components/TorusKnot";

const App = () => {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
};

export default App;
