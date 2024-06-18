import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";   //TO USE TIMELINE AND SHOW IN VERTICAL FASHION
import { motion } from "framer-motion";//TO MOVE VERTICALLY NEXT DOWN SECTION

import "react-vertical-timeline-component/style.min.css"; //TO LOOK AND WORK VERTICAL TIMNELINE

import { styles } from "../styles";             //used for making appearance properties
import { callingeveryeachworkexpcard } from "../constants";     //used to call this class as it stores data of every single item  present in index.js
import { SectionWrapper } from "../hoc";        //FOR WRAPPING PADDING
import { textVariant } from "../utils/motion";



// =================================================DEFINING CONTENT IN THE THINGS TO APPEAR :CREATING EACH EXPERRIENCE CARD  ============================================================//


const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
    // card background and color
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}

    //arrow style and date
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date} //got date as defined in index.js, respective dates are called from index.js under date string defined there 

    //ICON USED FOR REPRESENTING THE CARD 1)BACKGROUND 2)ICON SOURCE(WHERE ITS DEFINED) 3)APPERANCE PROPS
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >


  {/*Getting inside the class vertical timeline element */}

    {/* FIRST LAYER OF TEXT INSIDE THE CARD TITLE AND COMPANY NAME */}
      <div>
        {/* TEXT 1 TITLE  :HIS ROLE  */}
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        {/* TEXT 2 COMPANY */}
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      {/* LAYER OF TEXT HAVING DESCRIPTION OF THE EXPERIENCE  */}
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>


    </VerticalTimelineElement>
  );
};


// ==========================================================ALL THINGS THAT APPEAR IN THIS PORTION ==========================================================//


const Workexpdef = () => {
  return (
    <>
    {/*==== A FUNCTION WHICH TAKES ALL THE TEXT INTO IT==== */}
      <motion.div variants={textVariant()}>   

           {/*TEXT 1*/}
        <p className={`${styles.sectionSubText} text-center`}>
          Behalf of IIT ROORKEE
        </p>
            {/* TEXT 2 */}
        <h2 className={`${styles.sectionHeadText} text-center`}>
          PUBLICATIONS  done by VLG Team
        </h2>

      </motion.div>


    {/*=== GAP BETWEEN THE WORK EXPERIENCE (TEXT) AND THE START OF VERICAL TIMELINE ===*/}
      <div className='mt-2 flex flex-col'>

    {/*VERICAL TIME FUNCTIONING ITS EXPERIENCES ARE DEFINED IN INDEX.JS  */}
        <VerticalTimeline>
        
          {callingeveryeachworkexpcard.map((experience, index) => (    //experiences class that has data in indes.js will map attach to experienceclass derived above
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}

        </VerticalTimeline>
      </div>



    </>
  );
};




export default SectionWrapper(Workexpdef, "con8workexpdef"); //THIS IS GOT POPULATED FROM THE ID NAME MENTIONED IN SECTION WRAPPER
                                                  //OR CALLED FROM SECTION WRAPPER
