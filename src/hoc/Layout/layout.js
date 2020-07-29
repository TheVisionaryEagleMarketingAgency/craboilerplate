import React, { Component } from "react";
import "./layout.css";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
class Layout extends Component {
  state = {
    //initial state of the sideNav //hidden
    //Make the header listen if the side bar is closed or open
    showNav: false,
  };

  //function that sets the new state as per click data

  toggleSidenav = (click) => {
    this.setState({
      showNav: click,
    });
  };

  render() {
    //The header needs to know if the sidebar is closed or open
    //Then it needs to toggle the state of the sidenav based on click
    //pass options for that
    return (
      <div>
        <Header
          //These options would be passed to the header components in header.js as props
          showNav={this.state.showNav} //initial state of sidebar
          onHideNav={() => this.toggleSidenav(false)} //Call back to close the nav when clicked
          onOpenNav={() => this.toggleSidenav(true)} //Call back to open the nav when clicked
        />
        {this.props.children}

        <Footer />
      </div>
    );
  }
}

export default Layout;
