import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>   //WILL USE THIS IN ALL PORTION SECTIONS INSIDE COMPONENTS AND FOR IDS LIKE ABOUT WORK CONTACT
  

function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}     //ANIMATE THE SECTION
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`} //TO MOVE AWAY FROM LEFT EDGE
      >


        {/* FOR SCROLL  BY CLICK ON THE GIF BAR KEPT BELOW THE 3D MODAL  */}
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        {/* APPLY FOR ALL COMPONENTS */}
        <Component />


      </motion.section>
    );
  };

export default StarWrapper;
