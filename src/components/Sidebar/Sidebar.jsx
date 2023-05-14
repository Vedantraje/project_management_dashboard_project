import React from "react";
import logo from "../../images/profile.png";
import { SidebarData1,SidebarData2 } from "../Data/Data";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="Sidebar">
      {/*logo */}
      <div className="logo">
        <img src={logo} alt="profile_img" />
        <h4>Hello</h4>
      </div>

      {/*Menu*/}

      <div className="menu">
        <h2 align="center">Menu</h2>
        {SidebarData1.map((item, index) => {
          return (
            <div key={index} className="menuData1">
              {item.icon}
              <span>{item.heading}</span>
            </div>
          );
        })}

        <h2 align="center">Favorites</h2>
        {SidebarData2.map((item, index) => {
          return (
            <div key={index} className="menuData2">
              {item.icon}
              <span>{item.heading}</span>
            </div>
          );
        })}
       
      </div>
    </div>
  );
}

export default Sidebar;
