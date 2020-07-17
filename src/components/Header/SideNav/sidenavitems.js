import React from "react";
import FontAwesome from "react-fontawesome";
import style from "./sideNav.css";
import { Link } from "react-router-dom";

const SideNavItems = () => {
  return (
    <div className={style.option}>
      <Link to="/">
        <FontAwesome name="home">Home</FontAwesome>
      </Link>
    </div>
  );
};

export default SideNavItems;
