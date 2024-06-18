import React from "react";
import { motion } from "framer-motion";

import { Exploreimg } from "../assets";          //ICON N TO THE BUTTON 
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";             //FOR WRAP PADDING GAP FROM LEFT EDGE
import { fadeIn, textVariant } from "../utils/motion"; //CARD STYLING AND APPERANCE PROPERTIES
import { callingeveryeachtestfeedcard } from "../constants";         //DATA CONTENT THROUGH INDEX.JS 



// =================================================DEFINING CONTENT IN THE THINGS TO APPEAR :CREATING EACH EXPERRIENCE CARD  ============================================================//


const FeedbackCard = ({
  index,
  testimonial,
  name,
  blog,
  designation,
  source_code_linker,
  source_code_link_project,
  company,
}) => (

  // animation of motion of the cards appearing first time 
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full '
  >

    {/* " this symbol */}
    <p
    // onClick={() => window.open(source_code_link_project, "_blank")} 
    className='text-white font-bold text-[25px] cursor-pointer'>
      {blog}

    </p>




     {/*=============== KEEPING BUTTON TO GO NEXT BRANCH PAGE HERE GITHUB BUTTON ===============*/}
          {/* BUTTON POSITION  */}
          <div className='absolute inset-0 flex justify-end p-20  card-img_hover'
          >

            {/*ON CLICKING PROCESS ACTION TO HAPPEN */}
            <div
              onClick={() => window.open(source_code_linker, "_blank")}  //BLANK MEANS OPENING IINNEW PAGE, ON CLICKING GOES TO source_code_link goes by recognizing first in this import page and goes to index.js and follows that command
              
              className='black-gradient w-20 h-10  flex justify-center items-center cursor-pointer'//button appearancce properties
            >

            {/* image to appear on the button to click in the project card */}
              <img
                src={Exploreimg}  //from png image from assets goes there by recognizing mentioning in above imporrts 
                alt='source code'
                className='w-1/2 h-1/2 object-contain '
              />

            
            </div>
          </div>





    {/* inside card paragraph spacing placing first text text placing and apperance properties */}
  {/* and its content text from testimonials import from index.js */}
    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
      
      {/* INSIDE CARD SPACE BETWEEN PARAGRAPH AND THE CONTACT  */}
      <div className='mt-7 flex justify-between items-center gap-1'>

        <div className='flex-1 flex flex-col'>
          {/* inside card contact first text text placing and apperance properties */}
          <p className='text-white font-medium text-[16px]'>
            {/* @ symbol */}
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          {/* inside card contact second text placing and apperance properties */}
          <p className='mt-1 text-secondary text-[12px]'>

            {designation} of {company}
          </p>
        </div>


{/* image of the person
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        /> */}

      </div>
    </div>
  </motion.div>
);




    {/*==== A FUNCTION WHICH TAKES TOP TOP TEXT WHOLE HOVER HEADINGS THE TEXT INTO IT==== */}




const TestFeedbacksdef = () => {
  return (
    // spacing btw project card and testimonials biggest card 
    <div className={`mt-12 bg-black-100 rounded-[20px] `}>

      
      {/*  apperance properties of the testimonials biggest card   */}

      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >

        {/*==== A FUNCTION WHICH TAKES TOP TOP  direct TEXT WHOLE HOVER HEADINGS THE TEXT INTO IT==== */}
        {/* small heading and the large heading */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Blogs.</h2>
        </motion.div>

      </div>

       {/*=== GAP BETWEEN THE paragraph(TEXT) AND THE project card ===*/}
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>

        {/* display the testimonial card  */}
        {callingeveryeachtestfeedcard.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(TestFeedbacksdef, "con8testfeeddef");//sub tabs not there in tech and jsx file
