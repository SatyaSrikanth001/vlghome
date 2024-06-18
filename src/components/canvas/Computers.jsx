import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";                //like an empty panel to place anything on the modal
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";// //we import these utilities for texture,drwing,apperance properties and usegltf for importing 3d modals

import CanvasLoader from "../Loader";                                 //BACK SIDE %LOADER BEFOR THE 3D MODAL APPEARS            



//==================== Setting the 3d modal computer,put the computer appearing on the website ie, import it using useGLTF  also get good 3d modals for other imports best from sketch fab downloadables====================//
//=====================DEFINING THE CONTENT IN THE THINGS THAT APPEAR: HERE THE 3D MODAL==========================================================================//
const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf"); //this is the 3d modal we created prepared 

  return (
    // create a different light to see the 3d object
    <mesh>
      {/* light number 1 */}
      <hemisphereLight intensity={0.15} groundColor='black' />
      {/* light number 2 */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}/>
      {/* Light number 3 */}
      <pointLight intensity={1} />
      {/* to see the computer object and place at the required position */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.75, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// =========================================================MATCHINGFOR MOBILE DEVICE=============================================================================================================================//

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);


  //==================================================================we are loading our work on to the canvas ie, panel to see the work to display=========================================//
  //==================================================================THING TO APPEAR ON THE CANVAS OR PANEL AND SETTING OUR POINT OF VIEW=========================================//

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}  //eye locaton where are we looking where is the eye the 3d object 
      gl={{ preserveDrawingBuffer: true }}        to properly render our object
    >

      {/* ==from react to have loader to load the object== */}
      <Suspense fallback={<CanvasLoader />}>     

        {/* to allow to control and operate the 3d modal to zoom, move left right etc.. */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}/>   

        {/* 3d modal */}
        <Computers isMobile={isMobile} />


      </Suspense>  

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
