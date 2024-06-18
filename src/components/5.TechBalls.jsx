import React from "react";

import { BallCanvas } from "./canvas";       //TO GET THE ballcanvas 3D MODAL ON TO THE CANVAS PANEL
import { SectionWrapper } from "../hoc";    //WRAP A PADDING GAPFROM LEFT EDGE
import { callingeveryeachtechball } from "../constants";//used to call this class as it stores data of every single item present in index.js

const Techlangdef = () => {
  return (
    // for all the whole display of tech balls
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      
 {/*technologies class that has data in indes.js will map attach to technologyclass derived above  */}
      {callingeveryeachtechball.map((technology) => (

        // each Techball appearance properties and content in it 
        <div className='w-28 h-28' key={technology.name}>

          {/* call 3d modal canvas and place icon on the canvas panel */}
          <BallCanvas icon={technology.icon} />    
        
        </div>

      ))}



    </div>
  );
};



export default SectionWrapper(Techlangdef, "con8techlangdef");//sub tabs not there in tech and jsx file
