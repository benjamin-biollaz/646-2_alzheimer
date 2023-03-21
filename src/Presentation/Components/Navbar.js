import * as React from "react";
import { NavLink } from "react-router-dom";
import icon from "../img/logo_memorys.png";
import "../CSS/Navbar.css";
import { FiMenu } from "react-icons/fi";

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
      <NavLink to="/infos" onClick={() => this.closeNavBar()}>
        Graphiques
      </NavLink>
    );
    information = (
      <NavLink to="/infos" onClick={() => this.closeNavBar()}>
        Informations
      </NavLink>
    );

    //initial navbar and icon state
    let navbar = (
      <>
        <NavLink to="/home">
          <img className="navImage" src={icon} alt="logo" />
        </NavLink>
        <button
          className="hamburger"
          alt="logo"
          onClick={() => this.toggleNavBarOpen()}
        >
          <FiMenu />
        </button>
        <nav
          className={this.state.isNavBarOpen ? "appBar" : "appBar appBarClosed"}
        >
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              {graphs}
              {information}
            </ul>
          </div>
        </nav>
      </>
    );

    return <div id="navBarDiv">{navbar}</div>;
  }
}

export default Nav;
