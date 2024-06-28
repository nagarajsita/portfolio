import React from "react";
import { FloatingNav } from "./ui/FloatingNavBar";
import { House, Code, Briefcase, EnvelopeSimple } from "phosphor-react";

const navItems = [
  { name: "Home", link: "#home", icon: <House weight="bold" size={20} /> },
  {
    name: "Skills",
    link: "#skills",
    icon: <Code weight="bold" size={20} />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <Briefcase weight="bold" size={20} />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <EnvelopeSimple weight="bold" size={20} />,
  },
];
const NavBar = () => {
  return (
    <div>
      <FloatingNav navItems={navItems} />
    </div>
  );
};

export default NavBar;
