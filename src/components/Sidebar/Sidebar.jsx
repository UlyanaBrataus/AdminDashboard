import React, { useState } from "react";
import Logo from "../../imgs/logo.png";
import { SidebarData } from "../../Data/Data";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import "./Sidebar.css";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const sidebarVariants = {
    true: { left: "0" },
    false: {
      left: "-60%",
    },
  };

  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpanded(!expanded)}
      >
        <UilBars />
      </div>
      <motion.section
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        <div className="sidebar__logo">
          <img src={Logo} alt="" />
          <span>
            Sh<span className="color-letter">o</span>ps
          </span>
        </div>
        <menu className="sidebar__menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={
                  selected === index ? "menu__item active" : "menu__item"
                }
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}
          <div className="menu__item">
            <UilSignOutAlt />
          </div>
        </menu>
      </motion.section>
    </>
  );
};

export default Sidebar;
