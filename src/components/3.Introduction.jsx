import React from "react";
import Tilt from "react-tilt";          //to gliding tilt the cards
import { motion } from "framer-motion"; //

import { styles } from "../styles";     //for editing propertie of text items etc..
import { callingeveryeachintrocard } from "../constants";//used to call this class as it stores data of every single item present in index.js
import { SectionWrapper } from "../hoc";//FOR WRAPING A GAP PADDING FOR ALL THE PAGE
import { fadeIn, textVariant } from "../utils/motion";




// ==========================================================DEFINING CONTENT IN THE THINGS TO APPEAR: creating appearance Each Service card ===========================================================================// 

//HAS CALLED OR DEFINED THINGS LIKE ITEM TITLE INSIDE INDEX.JS FILE  INSIDE BRACES HERE
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>

    {/*==APPEARANCE PROPERTIES AND  TILTING OPTIONS==*/}
      {/* BOX APPEARANCE AND PROPS */}
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >

          {/* TILING OPTIONS */}
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >

            {/* ICON */}
            <img
              src={icon}                    //RESPECTIVE ICON WAS CALLED OR DEFINED IN INDEX.JS
              alt='web-development'
              className='w-16 h-16 object-contain'
            />

            {/* TITLE */}
            <h3 className='text-white text-[20px] font-bold text-center'>
              {title}
            </h3>

          </div>
    </motion.div>
  </Tilt>
);


//================================================================= All the things to appear in this portion ======================================================//



const Introdef = () => {
  return (
    <>
    {/* TEXT 1 */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* TEXT 2 */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[18px] max-w-4xl leading-[30px]'
      >
        
        The Vision and Language Group, part of ACM IIT Roorkee Chapter,
        is a student run group that aims to foster a research-centric Deep Learning Community
        at IIT Roorkee. We regularly hold open discussions on various DL, CV, NLP papers
        presented in the latest conferences/journals and also on various general topics 
        pertaining to the Deep Learning field. These discussions are open for anyone to join in.



        <p  className='mt-5 text-secondary text-[18px] max-w-4xl leading-[30px]'  //GAP BTW THIS AND BEFORE ITEM,TEXT SIZE,PANEL TO PLACE THIS TEXT ,GAPBTW LINE IN THIS PARA
        >Apart from this, the group members are also involved in various research based projects, sometimes in collaboration with other professors, with the ultimate goal to bring forth a positive impact in a sub-field we are interested in and also aim for some of the tier-1 conferences.</p>
        <p  className='mt-5 text-secondary text-[18px] max-w-3xl leading-[30px]'
        >We are constantly looking for new collaborations, so do contact us if you find our work interesting. Also you can follow us up on Facebook and Twitter to receive updates about our activities.</p>
      </motion.p>

      


      {/* TEXT 3 */}
      <div className='mt-20 flex flex-wrap gap-10'>

        {callingeveryeachintrocard.map((service, index) => (
          // calling for the service card to appear here
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
        
      </div>


    </>
  );
};

export default SectionWrapper(Introdef, "con8introdef"); //THIS IS GOT POPULATED FROM THE ID NAME MENTIONED IN SECTION WRAPPER
                                                //OR CALLED FROM SECTION WRAPPER
