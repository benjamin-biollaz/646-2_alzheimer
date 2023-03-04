import * as React from "react";
import { NavLink } from "react-router-dom";
import icon from "../img/dark_green.png";
import "../CSS/Navbar.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavBarOpen: false,
    };
  }

  toggleNavBarOpen = () => {
    this.setState((prevState) => ({
      isNavBarOpen: !prevState.isNavBarOpen,
    }));
  };

  closeNavBar = () => {
    this.setState({ isNavBarOpen: false });
  };

  render() {
    let information = null;
    let graphs = null;

    graphs = (
      <NavLink to="/information" onClick={() => this.closeNavBar()}>
        Graphiques
      </NavLink>
    );
    information = (
      <NavLink to="/information" onClick={() => this.closeNavBar()}>
        Informations
      </NavLink>
    );

    //initial navbar and icon state
    let navbar = (
      <>
        <NavLink to="/home">
          <img className="navImage" src={icon} alt="logo" />
        </NavLink>
        <img
          className="hamburger"
          //   src={expand}
          alt="logo"
          onClick={() => this.toggleNavBarOpen()}
        />
        <nav
          className={this.state.isNavBarOpen ? "appBar" : "appBar appBarClosed"}
        >
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              {graphs}
              {information}
              {/* <NavLink to="/home" onClick={() => this.closeNavBar()}>
                Home
              </NavLink> */}

              {/* {questionnaire}
              {results}
              {profile}
              {docPage}
              {admin}
              {register}
              {LoginLogout} */}
            </ul>
          </div>
        </nav>
      </>
    );

    return <div id="navBarDiv">{navbar}</div>;
  }
}

export default Nav;
