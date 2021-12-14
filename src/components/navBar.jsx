import React from "react";
import { Link, NavLink } from "react-router-dom";
import DropDown from "../common/dropDown";
import Select from "../common/select";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/pcbreport">
              Report
            </NavLink>
            <NavLink className="nav-item nav-link" to="/product">
              Product
            </NavLink>
            <NavLink className="nav-item nav-link" to="/brand">
              Brand
            </NavLink>
            <NavLink className="nav-item nav-link" to="/model">
              Model
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
