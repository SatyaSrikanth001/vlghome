import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber"; //like an empty panel to place anything on the modal
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";       //we import these utilities for texture,drwing,apperance properties  of the modal 


import CanvasLoader from "../Loader";   //BACK SIDE %LOADER BEFOR THE 3D MODAL APPEARS



//==================== Setting the 3d modal computer,put the computer appearing on the website ie, import these 13 modals using useTexture  also get good 3d modals for other imports best from sketch fab downloadables====================//
//=====================DEFINING THE CONTENT IN THE THINGS THAT APPEAR: HERE THE 3D MODAL==========================================================================//

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    // properties of modal to float rotate 
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>

      {/* lights */}
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      
      {/* apperance properties */}
      <mesh castShadow receiveShadow scale={2.75}>

        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading/>

        {/*icon on the ball */}
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />

      </mesh>
    </Float>
  );
};




 //==================================================================we are loading our work on to the canvas ie, panel to see the work to display=========================================//
  //==================================================================THING TO APPEAR ON THE CANVAS OR PANEL AND SETTING OUR POINT OF VIEW=========================================//





const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >

      {/* for having a loader */}
      <Suspense fallback={<CanvasLoader />}> 
      
        <OrbitControls enableZoom={false} />
        
        {/* 3d modal */}
        <Ball imgUrl={icon} /> 
      
      </Suspense>

      <Preload all />

    </Canvas>
  );
};

export default BallCanvas;
