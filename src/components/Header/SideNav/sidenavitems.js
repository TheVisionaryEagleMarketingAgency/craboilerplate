import React from "react";
import { SideNav } from "react-simple-sidenav";
import FontAwesome from "react-fontawesome";
import style from "./sideNav.css";
import { Link } from "react-router-dom";

const SideNavItems = () => {
  return (
    <div className={styleMedia.option}>
      <Link to="/">
        <FontAwesome name="home">Home</FontAwesome>
      </Link>
    </div>
  );
};

export default SideNavItems;
