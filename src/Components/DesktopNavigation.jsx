import { motion } from "framer-motion";
import todoIcon from "../images/icon-todo.svg";
import celenderIcon from "../images/icon-calendar.svg";
import reminderIcon from "../images/icon-reminders.svg";
import planningIcon from "../images/icon-planning.svg";
import { useState } from "react";
import iconArrowDown from "../images/icon-arrow-down.svg";
import iconArrowUp from "../images/icon-arrow-up.svg";
import "../css/DesktopNavigation.css";
const DesktopNavigation = () => {
  const [featuresArrowIcon, setFeaturesArrowIcon] = useState(iconArrowDown);
  const [companyArrowIcon, setCompanyArrowIcon] = useState(iconArrowDown);
  const [featuresDropDown, setFeaturesDropDown] = useState("hide");
  const [companyDropDown, setCompannyDropDown] = useState("hide");

  const buttonVarient = {
    hidden: {
      opacity: 0.5,
    },
    visable: {
      opacity: 1,
      transition: {
        stiffness: 10,
        type: "spring",
      },
    },
  };

  return (
    <div
      className="DesktopNavigation-container"
      onClick={() => {
        if (featuresDropDown === "show") {
          setFeaturesDropDown("hide");
          setFeaturesArrowIcon(iconArrowDown);
        }
        if (companyDropDown === "show") {
          setCompannyDropDown("hide");
          setCompanyArrowIcon(iconArrowDown);
        }
      }}
    >
      <motion.nav
        variants={buttonVarient}
        transition={{
          when: "beforeChildren",
          staggerChildren: 0.2,
        }}
      >
        <div
          className="features-btn-container"
          onClick={() => {
            setFeaturesDropDown(featuresDropDown === "hide" ? "show" : "hide");
            setFeaturesArrowIcon(
              featuresArrowIcon === iconArrowDown ? iconArrowUp : iconArrowDown
            );
          }}
        >
          <motion.span
            variants={buttonVarient}
            animate="visable"
            initial="hidden"
            whileTap={{
              scale: 0.7,
            }}
          >
            Features
            <img src={featuresArrowIcon} alt="Arrow Icon" />
          </motion.span>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: featuresDropDown === "hide" ? 0 : 1,
            }}
          >
            <motion.span>
              <img src={todoIcon} alt="" />
              Todo List
            </motion.span>
            <motion.span>
              <img src={celenderIcon} alt="" />
              Calender
            </motion.span>
            <motion.span>
              <img src={reminderIcon} alt="" />
              Reminder
            </motion.span>
            <motion.span>
              <img src={planningIcon} alt="" />
              Planning
            </motion.span>
          </motion.div>
        </div>
        <div
          className="company-btn-container"
          onClick={() => {
            setCompannyDropDown(companyDropDown === "hide" ? "show" : "hide");
            setCompanyArrowIcon(
              companyArrowIcon === iconArrowDown ? iconArrowUp : iconArrowDown
            );
          }}
        >
          <motion.span
            variants={buttonVarient}
            animate="visable"
            initial="hidden"
            whileTap={{
              scale: 0.7,
            }}
          >
            Company
            <img src={companyArrowIcon} alt="Arrow Icon" />
          </motion.span>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: companyDropDown === "hide" ? 0 : 1,
            }}
          >
            <motion.span>History</motion.span>
            <motion.span>Our team</motion.span>
            <motion.span>Blog</motion.span>
          </motion.div>
        </div>
        <motion.span
          variants={buttonVarient}
          animate="visable"
          initial="hidden"
          whileTap={{
            scale: 0.7,
          }}
        >
          Careers
        </motion.span>
        <motion.span
          variants={buttonVarient}
          animate="visable"
          initial="hidden"
          whileTap={{
            scale: 0.7,
          }}
        >
          About
        </motion.span>
      </motion.nav>
      <div className="registration">
        <motion.button
          variants={buttonVarient}
          animate="visable"
          initial="hidden"
          whileTap={{
            scale: 0.7,
          }}
        >
          Login
        </motion.button>
        <motion.button
          style={{
            border: "2px solid gray",
          }}
          variants={buttonVarient}
          animate="visable"
          initial="hidden"
          whileTap={{
            scale: 0.7,
          }}
        >
          Register
        </motion.button>
      </div>
    </div>
  );
};
export default DesktopNavigation;
