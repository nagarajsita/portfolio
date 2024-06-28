import React from "react";
import { FaCode, FaEnvelope, FaHome, FaProjectDiagram } from "react-icons/fa";
import { FloatingNav } from "./ui/FloatingNavBar";
const navItems = [
  { name: "Home", link: "#home", icon: <FaHome /> },
  { name: "Skills", link: "#skills", icon: <FaCode /> },
  { name: "Projects", link: "#projects", icon: <FaProjectDiagram /> },
  { name: "Contact", link: "#contact", icon: <FaEnvelope /> },
];

const NavBar = () => {
  return (
    <div>
      <FloatingNav navItems={navItems} />
    </div>
  );
};

export default NavBar;
