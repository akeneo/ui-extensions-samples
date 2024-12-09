"use client"

import {Information, UsersIllustration} from 'akeneo-design-system'
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/bmw.glb");
  return <primitive object={scene} scale={0.01} />
}

function App() {
  return (
    <>
      <div>
        <Information
          illustration={<UsersIllustration />}
          title="Render 3d models"
        >
          You can retrieve 3d model asset, and render it directly in the browser.
        </Information>
      </div>
      <Canvas dpr={[1,2]} shadows camera={{ fov: 45 }} style={{"position": "absolute"}}>
        <color attach="background" args={["#101010"]} />
        <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
          <Stage environment={"sunset"}>
            <Model/>
          </Stage>
        </PresentationControls>
      </Canvas>
    </>
  );
}

export default App;