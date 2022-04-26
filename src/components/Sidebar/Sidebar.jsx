import React, { useState } from "react";
import Logo from "../../imgs/logo.png";
import { SidebarData } from "../../Data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import "./Sidebar.css";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="sidebar">
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
    </section>
  );
};

export default Sidebar;
