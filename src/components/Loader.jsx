import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
    
  {/* loading ie,95% 99%etcthat loader for loading the 3d modal */}

  return (
    <Html
      as='div'
      
      // POSITIONING OF THE LOADER LOADING ONE LOADER OF THE 3D MODAL
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}>

      <span className='canvas-loader'></span>
      
      {/* //ELEMENTAL PROPERTIES OF THE TEXT BELOW LOADER */}
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}>
    
        {progress.toFixed(2)}%
    
      </p>
    </Html>
  );
};

export default CanvasLoader;
