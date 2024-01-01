import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { images } from "../../constants"; // import images from constants.js
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleMenuClick = (item) => {
    if (item === "resume") {
      window.location.href =
        "https://drive.google.com/file/d/1vMQeTtJhlJhY2KFmmNNKLfQc6x2cU5uU/view?usp=drive_link";
    } else {
      setToggle(false);
    }
  };

  const menuAnimation = {
    hidden: { x: 400 },
    visible: { x: 0 },
    exit: { x: 400 },
  };

  const menuTransition = {
    type: "spring",
    stiffness: 200,
    damping: 30,
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app_resume">
        <a
          href="https://drive.google.com/file/d/1vMQeTtJhlJhY2KFmmNNKLfQc6x2cU5uU/view?usp=drive_link"
          className="btn btn2"
          target="_blank"
        >
          Resume
        </a>
      </div>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        <AnimatePresence>
          {toggle && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuAnimation}
              transition={menuTransition}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {["home", "about", "work", "skills", "contact", "resume"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item}`}
                        onClick={() => handleMenuClick(item)}
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
