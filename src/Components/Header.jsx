import Logo from "../images/logo.svg";
import "../css/Header.css";
import { useState } from "react";
import iconArrowDown from "../images/icon-arrow-down.svg";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation.jsx";
const Header = () => {
  return (
    <div className="Header-container">
      <img src={Logo} alt="" />
      <DesktopNavigation />
      <MobileNavigation />
    </div>
  );
};
export default Header;
