import React from "react";
import { motion } from "framer-motion";
import imageHeroDesktop from "../images/image-hero-desktop.png";
import imageHeroMobile from "../images/image-hero-mobile.png";
import clientDatabiz from "../images/client-databiz.svg";
import clientAudiophile from "../images/client-audiophile.svg";
import clientMeet from "../images/client-meet.svg";
import clientMaker from "../images/client-maker.svg";
import "../css/Body.css";
import { useState } from "react";
export default function Body() {
  const [imageHero, setImageHero] = useState(imageHeroDesktop);
  window.addEventListener("resize", () => {
    setImageHero(window.innerWidth <= 782 ? imageHeroMobile : imageHeroDesktop);
  });
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        duration: 1,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className="Body-container">
      <motion.section
        variants={container}
        className="intro-text"
        animate="show"
        initial="hidden"
      >
        <motion.h1 variants={item}>Make remote work</motion.h1>
        <motion.p variants={item}>
          {" "}
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </motion.p>
        <motion.button variants={item}>Learn More</motion.button>
        <motion.div variants={item}>
          <motion.img src={clientDatabiz} alt="" />
          <motion.img src={clientAudiophile} alt="" />
          <motion.img src={clientMeet} alt="" />
          <motion.img src={clientMaker} alt="" />
        </motion.div>
      </motion.section>
      <motion.section className="imageHero-container">
        <motion.img
          initial={{
            x: "100vh",
          }}
          animate={{
            x: "0",
          }}
          transition={{
            type: "spring",
            stiffness: 60,
          }}
          className="imageHero"
          src={imageHero}
          alt=""
        />
      </motion.section>
    </div>
  );
}
