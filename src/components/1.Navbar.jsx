import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";            //for navigation to required part of the web page

import { styles } from "../styles";             //FOR EDITING APPEARANCE,PROPERTIES AND ITEMS
import { callingeveryeachTab } from "../constants";        //data of tabs is defined there NAVIGATION GOING TO REQUIRED PLACE CLICKING THE TABS
import { vlglogo, menu, close } from "../assets";  //ICON FILES FOR BUTTON FACE

const Navbar = () => {
  const [active, setActive] = useState("");    //for putting link of the tabs u click into the url ie, going activate your clicking action 
  const [toggle, setToggle] = useState(false); //for menu icon close and open the menu
  const [scrolled, setScrolled] = useState(false);

//====Scrolling of Navigation bar=====//
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

// ======FOR WHOLE NAV BAR========//
  return (
    <nav
      className={`${
        styles.paddingX //paddingX utility class createed taken styles
      } w-full flex items-center py-7 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : " bg-transparent"

      }`}
    >

{/* ===========================================================================LOGO AND A CAPTION TAG================================================================== */}
      <div className='w-full flex justify-between items-center max-w-9xl mx-auto'>
        {/*bindings btw logo and caption*/}
        <Link
          to='/'                                                              //meaning top of page
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          {/* all about vlglogo :image */}
          <img src={vlglogo} alt='vlglogo' className='w-9 h-9 object-contain' />  
          {/* all about caption or tag:text */}
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            VLG &nbsp;
            <span className='sm:block hidden'> | Vision and Language Group </span>
          </p>

        </Link>

    {/* ================================================================TABS ABOUT About,Work,Contact =================================================================== */}
        {/* functioning of Tabs(About,Work,Contact)  */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {callingeveryeachTab.map((nav) => (

            <li
              key={nav.id}

              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}

              onClick={() => setActive(nav.title)}
            >

              <a href={`#${nav.id}`}>{nav.title}</a>
            
            </li>
          ))}
        </ul>


      {/* ==============================For small screens and devices for About, Work, Contact we create a menu sub side bar to fit in========================== */}
        {/* functioning of menu opening and closing */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

              {/* ----menu box properties ---- */}
              <div
                className={`${
                  !toggle ? "hidden" : "flex"
                } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
              >
              
                {/*functioning of Tabs(About,Work,Contact) inside menu is similar as mentioned above */}
                <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                  {callingeveryeachTab.map((nav) => (

                    <li
                      key={nav.id}
                      className={`font-poppins font-medium cursor-pointer text-[16px] ${
                        active === nav.title ? "text-white" : "text-secondary"
                      }`}
                      onClick={() => {
                        setToggle(!toggle);    //closing and opening 
                        setActive(nav.title);  //will navigate to clicked tag
                      }}>

                      <a href={`#${nav.id}`}>{nav.title}</a>
                      
                    </li>
                  ))}
                </ul>

              </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
