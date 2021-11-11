import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";
import HamburgerIcon from "../../assets/images/Hamburger.svg";
import { AppContext } from "../AppContext";
import Logo from "../../assets/images/Logo.svg";

function Navbar() {
  const { isNavToggled, setIsNavToggled } = useContext(AppContext);
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <ul>
            <li>
              <Link
                style={{ textDecoration: "none", color: "var(--White)" }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "var(--White)" }}
                to="/trending"
              >
                Trending
              </Link>
            </li>
          </ul>
        </div>
        <div
          onClick={() => {
            setIsNavToggled(!isNavToggled);
          }}
          className="navbar-toggle"
        >
          <img src={HamburgerIcon} />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
