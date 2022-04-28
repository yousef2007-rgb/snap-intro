import { motion } from "framer-motion";
import todoIcon from "../images/icon-todo.svg";
import celenderIcon from "../images/icon-calendar.svg";
import reminderIcon from "../images/icon-reminders.svg";
import planningIcon from "../images/icon-planning.svg";
import { useState, useRef, useEffect } from "react";
import iconArrowDown from "../images/icon-arrow-down.svg";
import iconArrowUp from "../images/icon-arrow-up.svg";
import closeIcon from "../images/icon-close-menu.svg";
import "../css/MobileNavigation.css";
import menuIcon from "../images/icon-menu.svg";
const MobileNavigation = () => {
  const [featuresArrowIcon, setFeaturesArrowIcon] = useState(iconArrowDown);
  const [companyArrowIcon, setCompanyArrowIcon] = useState(iconArrowDown);
  const [featuresDropDown, setFeaturesDropDown] = useState("hide");
  const [companyDropDown, setCompannyDropDown] = useState("hide");
  const [navigationVisablity, setNavigationVisablity] = useState("hide");
  const featuresDropDownBtn = useRef();
  const companyDropDownBtn = useRef();
  const backDrop = useRef();
  useEffect(() => {
    featuresDropDownBtn.current.style.display =
      featuresDropDown === "hide" ? "none" : "block";
    companyDropDownBtn.current.style.display =
      companyDropDown === "hide" ? "none" : "block";
    backDrop.current.style.display =
      navigationVisablity === "hide" ? "none" : "block";
  });
  const buttonVarient = {
    hidden: {
      opacity: 0,
    },
    visable: {
      opacity: navigationVisablity === "show" ? 1 : 0,
      transition: {
        dauration: 10000,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    visable: { opacity: 1 },
  };

  return (
    <div
      className="MobileNavigation-container"
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
      <motion.img
        className="menu"
        src={menuIcon}
        alt=""
        onClick={() => {
          setNavigationVisablity("show");
        }}
        whileTap={{
          scale: 0.9,
        }}
      />
      <motion.div
        className="navigation-blur"
        ref={backDrop}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: navigationVisablity === "hide" ? 0 : 1,
        }}
      >
        <motion.div
          initial={{
            x: "100vw",
          }}
          animate={{
            x: navigationVisablity === "hide" ? "100vh" : 0,
          }}
          transition={{
            type: "twean",
            when: "beforeChildren",
            staggerChildren: 0.2,
          }}
          className="navigation"
        >
          <motion.img
            className="closeBtn"
            src={closeIcon}
            alt=""
            onClick={() => setNavigationVisablity("hide")}
            whileTap={{
              scale: 0.9,
            }}
          />
          <motion.nav variants={buttonVarient}>
            <div
              className="features-btn-container"
              onClick={() => {
                setFeaturesDropDown(
                  featuresDropDown === "hide" ? "show" : "hide"
                );
                setFeaturesArrowIcon(
                  featuresArrowIcon === iconArrowDown
                    ? iconArrowUp
                    : iconArrowDown
                );
              }}
            >
              <motion.span
                variants={item}
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
                ref={featuresDropDownBtn}
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
                setCompannyDropDown(
                  companyDropDown === "hide" ? "show" : "hide"
                );
                setCompanyArrowIcon(
                  companyArrowIcon === iconArrowDown
                    ? iconArrowUp
                    : iconArrowDown
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
                ref={companyDropDownBtn}
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
        </motion.div>
      </motion.div>
    </div>
  );
};
export default MobileNavigation;
