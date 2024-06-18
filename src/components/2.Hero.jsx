import { motion } from "framer-motion";    //FOR THE GIF BAR

import { styles } from "../styles";        //FOR EDITING PROPERTIESOF THE BOXES TEXTS STYLING OF THE APPEARANCE 
import { ComputersCanvas } from "./canvas";//TO GET THE COMPUTERCANVAS 3D MODAL ON TO THE CANVAS PANEL

const Hero = () => {
  return (
    //For background for the hero 3d computer section
    <section className={`relative w-full h-screen mx-auto`}> 

  {/* ============================================================All the text heading i am adrin================================================================== */}
      {/* for total pintype design and the text */}
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>

        {/* designer pin type style beside the text  */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />            
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        {/* the text  */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>VLG</span>
          </h1>
          
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Visual Language and Group <br className='sm:block hidden' />
            IIT ROORKEE
          </p>
        
        </div>

      </div>

  {/* =================================================================3D COMPUTER MODAL=========================================================================== */}
          
      <ComputersCanvas />


  {/* ======================================================THE GIF FOR SCROLLING DOWN TO THE OVERVIEW ============================================================ */}
      {/* POSITION OF THE BAR THT HELPS TO MOVE TO NEXT  */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        {/* Where to go on clicking the bar*/}
        <a href='#con8introdef'>
          {/* TEXTURE, APPEREANCE OF THE BAR */}
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            {/* MOVING OBJECT EXCITER SMALL BALL INSIDE THE BAR */}
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              // TEXTURE, APPEREANCE OF HTE SMALL BALL
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>




    </section>
  );
};

export default Hero;
