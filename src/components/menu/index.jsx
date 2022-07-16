import React from "react";
import {
  HomeOutlined,
  CompassOutlined,
  PlaySquareOutlined,
  TeamOutlined,
} from "@ant-design/icons";

import "./style.css";
import Logo from "../../assets/images/logow.png";

const Menu = () => {
  return (
    <div className="menu-container">
      {/* logo  */}
      <div className="logo">
        <img src={Logo} alt="logo" />
        <h1>Youtubee</h1>
      </div>

      {/* menu  */}
      <div className="menu-list">
        <div className="menu-item">
          <HomeOutlined />
          <h4>Home</h4>
        </div>
        <div className="menu-item">
          <CompassOutlined />
          <h4>Explore</h4>
        </div>
        <div className="menu-item">
          <PlaySquareOutlined />
          <h4>Shorts</h4>
        </div>
        <div className="menu-item">
          <TeamOutlined />
          <h4>Subscriptions</h4>
        </div>
        <hr>
        <div className="menu-item"></div>
      </div>
    </div>
  );
};

export default Menu;
