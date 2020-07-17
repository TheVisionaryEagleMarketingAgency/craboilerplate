import React from "react";
import SideNav from "react-simple-sidenav";
import SideNavItems from "./sidenavitems";

//The props are passed from <SideNav {...props} /> in here
const SideNavigation = (props) => {
  return (
    //This is the sidenav from react simple sidenav
    //us the props in this sidenav
    //Catch the click data in the bars in the header part
    <div>
      <SideNav
        showNav={props.showNav}
        onHideNav={props.onHideNav}
        navstyle={{ background: "red", padding: "10px", maxWidth: "220px" }}
      >
        <SideNavItems />
      </SideNav>
    </div>
  );
};

export default SideNavigation;
