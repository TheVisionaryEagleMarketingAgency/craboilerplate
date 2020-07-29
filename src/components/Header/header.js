import React from "react";
import styles from "./header.css";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import SideNav from "./SideNav/sideNav";
//import SideNavigation from "./SideNav/sideNav";

//All the options passed in header is passed to the header here
//Then create the sidebar navigation    <SideNav {...props} /> passed the props
const Header = (props) => {
  const navBars = () => {
    return (
      <div className={styles.bars}>
        <FontAwesome
          name="bars"
          //Catching the data from the click
          onClick={props.onOpenNav}
          style={{
            padding: "20px",
            color: "red",
            fontSize: "20px",
            cursor: "pointer",
          }}
        />
      </div>
    );
  };
  const logo = () => {
    return (
      <Link to="/" className={styles.logo}>
        <img alt="Logo" src="/images/nba_logo.png"></img>
      </Link>
    );
  };

  return (
    <div>
      <header className={styles.header}>
        <SideNav {...props} />

        <div className={styles.headeropt}>
          {navBars()}
          {logo()}
        </div>
      </header>
    </div>
  );
};

export default Header;
