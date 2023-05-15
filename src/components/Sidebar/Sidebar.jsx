import React from "react";
import logo from "../../images/profile.png";
import plus from '../../images/plus.png'
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
        <span id= "sideheading">Menu</span>
        {SidebarData1.map((item, index) => {
          return (
            <div key={index} id="menuData1">
              {item.icon}
              <span className="fav1">{item.heading}</span>
            </div>
          );
        })}

        <span id="sideheading1">Favorites</span>
        {SidebarData2.map((item, index) => {
          return (
            <div key={index} id="menuData2">
              {item.icon}
              <span className="fav1">{item.heading}</span>
            </div>
          );
        })}
       
      </div>

<div className="plus">
        <img src={plus} alt="profile_img" />
      </div>
      <span id="sp1">@2023 All Vedant Licence</span>
</div>
  );
}

export default Sidebar;
