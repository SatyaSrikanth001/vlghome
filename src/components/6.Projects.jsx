// import React, {  useState } from "react";
import React from "react";
import Tilt from "react-tilt";          //for animating the project cards
import { motion } from "framer-motion";

import { styles } from "../styles";          //APPREANCE PROPERTIES STYLING 
import { githubimg } from "../assets";          //ICON N TO THE BUTTON 
import { SectionWrapper } from "../hoc";    //to wrap a padding space from left edge
import { callingeveryeachprojectcard } from "../constants";    //SOURCE FOR CONTENT DATA IN THE PROJECT CARDS 
import { fadeIn, textVariant } from "../utils/motion"; //STYLING OF THE CARD AND TEXT FFOR TOP TOP WHOLE





// =================================================DEFINING CONTENT IN THE THINGS TO APPEAR :CREATING EACH EXPERRIENCE CARD  ============================================================//


const ProjectCard = (




  
  
  
  {

  index,
  description,
  name,
  tags,
  image,
  source_code_link,
  source_code_link_project,

}) => {   //BRACKETTED ITEMS ARE THERE TO APPEAR IN THE PROJECT CARD AND ARE DEFINED AND TAKEN FROM INDEX.JS
    

  // const [active, setActive] = useState("");    //for putting link of the tabs u click into the url ie, going activate your clicking action 

  return (
    // ====project card properties of positioning and appearance properties====//
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >

        {/*==== IMAGE INSIDE THE PROJECT CARD :: DIMENSIONS AND SOURCES(INDEX.JS)=====*/}
        <div className='relative w-full h-[230px]'>

          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

        {/*=============== KEEPING BUTTON TO GO NEXT BRANCH PAGE HERE GITHUB BUTTON ===============*/}
          {/* BUTTON POSITION  */}
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>

            {/*ON CLICKING PROCESS ACTION TO HAPPEN */}
            <div
              onClick={() => window.open(source_code_link, "_blank")}  //BLANK MEANS OPENING IINNEW PAGE, ON CLICKING GOES TO source_code_link goes by recognizing first in this import page and goes to index.js and follows that command
              
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'//button appearancce properties
            >

            {/* image to appear on the button to click in the project card */}
              <img
                src={githubimg}  //from png image from assets goes there by recognizing mentioning in above imporrts 
                alt='source code'
                className='w-1/2 h-1/2 object-contain '
              />

            
            </div>
          </div>






        </div>

        {/* =====FIRST LAYER OF TEXT headings INSIDE THE CARD TITLE AND COMPANY NAME its positioning from above image===== */}
        <div 
        className='mt-5`}'>
        {/* TEXT 1 TITLE  : */}
          <h3 
          onClick={() => window.open(source_code_link_project, "_blank")} 
          className='
          text-white font-bold text-[24px] cursor-pointer'>{name}
          </h3>
         {/* discription 2 position and calles description in index.js  */}
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          {/* <h3>
          <a href="https://www.iitr.ac.in/" target="_blank" rel="noopener"> 
          <span>Indian Institute of Technology Roorkee</span>
          </a>
          </h3> */}
        </div>






        {/* cards in cards imp :react javascript css hastags*/}
        {/* inside  everyeach individual card we want respective tags */}
        {/* not directly writing in callingeveryeachprojectcard in index.js     using map loop so they appear individual tag inrows similar as cards */}
        {/* cards(here tags)  in cards(project cards) */}
        {/* SECOND LAYER TEXTS: tags text   */}
        {/* positioning between the tags */}



        <div className='
        mt-4 flex flex-wrap gap-2'>

          {tags.map((tag) => (
            // text that comes in the tag adds with calling of the index.js
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>




        {/* <ul className='mt-4 flex flex-wrap gap-2'>
          {tags.map((nav) => (

            <li
              key={nav.name}

              className={`${
                active === nav.colo ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}

              // onClick={() => setActive(nav.colo)}
              onClick={() => window.open(source_code_link, "_blank")}  //BLANK MEANS OPENING IINNEW PAGE, ON CLICKING GOES TO source_code_link goes by recognizing first in this import page and goes to index.js and follows that command
            >

              <a href={`#${nav.name}`}>{nav.colo}</a>
            
            </li>
          ))}
        </ul> */}






      </Tilt>
    </motion.div>
  );
};


// ==========================================================ALL THINGS THAT APPEAR IN THIS PORTION ===============================================================//


const Projectsdef = () => {
  return (
    <>
    {/*==== A FUNCTION WHICH TAKES TOP TOP direct TEXT WHOLE HOVER HEADINGS THE TEXT INTO IT==== */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

    {/*=== GAP BETWEEN THE project (TEXT) AND THE START OF paragraph ===*/}
      <div className='w-full flex'>

      {/* LAYER OF TEXT HAVING DESCRIPTION OF THE EXPERIENCE ::: As this is one and only text we write here in tings to diaplay or appear  */}
      {/* or if more than one paragraps are there  we would define a class in index and import and write to get the para in above creating things */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>

      </div>

    {/*=== GAP BETWEEN THE paragraph(TEXT) AND THE project card ===*/}
    <div className='mt-20 flex flex-wrap gap-7'>

        {/* calling for the project card to display */}
        {callingeveryeachprojectcard.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}

      </div>
0.

    </>
  );
};

export default SectionWrapper(Projectsdef, "con8projdef");//sub tabs not there in tech and jsx file
