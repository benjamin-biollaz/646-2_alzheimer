import * as React from "react";
import { NavLink } from "react-router-dom";
import icon from "../img/logo_memorys.png";
import "../CSS/Navbar.css";
import { FiMenu } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavBarOpen: false,
      isDropdownOpen: false,
    };
  }

  toggleNavBarOpen = () => {
    this.setState((prevState) => ({
      isNavBarOpen: !prevState.isNavBarOpen,
    }));
  };

  toggleDropdownOpen = () => {
    this.setState(
      (prevState) => ({
        isDropdownOpen: !prevState.isDropdownOpen,
      }),
      () => console.log("Dropdown open state:", this.state.isDropdownOpen)
    );
  };

  closeNavBar = () => {
    this.setState({ isNavBarOpen: false });
  };

  render() {
    let menu = BsFillPersonFill;
    menu = (
      <div className="dropdown">
        <div
          className="dropdown-toggle"
          onClick={() => this.toggleDropdownOpen()}
        >
          <BsFillPersonFill />
        </div>
        {this.state.isDropdownOpen && (
          <div className="dropdown-menu">
            <NavLink to="/profile" onClick={() => this.closeNavBar()}>
              Changer de mot de passe
            </NavLink>
            <NavLink to="/logout" onClick={() => this.closeNavBar()}>
              Se déconnecter
            </NavLink>
          </div>
        )}
      </div>
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
          <ul className="nav navbar-nav">
            <div className="account_icon">{menu}</div>
          </ul>
        </nav>
      </>
    );

    return <div id="navBarDiv">{navbar}</div>;
  }
}

export default Nav;
