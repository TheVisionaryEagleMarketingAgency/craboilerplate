import React from "react";
import style from "./header.css";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import SideNav from "./SideNav/sideNav";
//import SideNavigation from "./SideNav/sideNav";

//All the options passed in header is passed to the header here
//Then create the sidebar navigation    <SideNav {...props} /> passed the props
const Header = (props) => {
  const navBars = () => {
    return (
      <div className={style.bars}>
        <FontAwesome
          name="bars"
          //Catching the data from the click
          onClick={props.onOpenNav}
          style={{
            color: "red",
            padding: "10px",
            cursor: "pointer",
          }}
        />
      </div>
    );
  };
  const logo = () => {
    return (
      <Link to="/" className={style.logo}>
        <img alt="Logo" src="/images/nba_logo.png"></img>
      </Link>
    );
  };

  return (
    <div>
      <header className={style.header}>
        <SideNav {...props} />

        <div className={style.headeropt}>
          {navBars()}
          {logo()}
        </div>
      </header>
    </div>
  );
};

export default Header;
