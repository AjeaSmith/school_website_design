import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/App.scss";
import M from "materialize-css";
const Menu = () => {
  useEffect(() => {
    // MORE dropdown
    const Dropdown = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(Dropdown, { coverTrigger: false, hover: true });

    // COUNSELING dropdown
    const Dropdown2 = document.querySelectorAll(".dropdown-trigger2");
    M.Dropdown.init(Dropdown2, { coverTrigger: false, hover: true });
  });
  return (
    <React.Fragment>
      <ul id="dropdown2" className="dropdown-content">
        <li>
          <Link to="/Counseling">COUNSELING</Link>
        </li>
      </ul>
      <ul id="dropdown1" className="dropdown-content">
        <li>
          <a href="https://www.weoc.info/">
            Washtenaw Educational Options Consortium
          </a>
        </li>
      </ul>
      <nav className="nav_menu">
        <div className="nav-wrapper">
          <ul className="left">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <NavLink to="/Admission">ADMISSION</NavLink>
            </li>
            <li>
              <NavLink to="/Calendar">CALENDAR</NavLink>
            </li>
            <li className="dropdown-trigger2" data-target="dropdown2">
              <NavLink to="/Curriculum">
                CURRICULUM
                <i className="material-icons right">arrow_drop_down</i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Student">STUDENT</NavLink>
            </li>
            <li className="dropdown-trigger" data-target="dropdown1">
              <Link to="/">
                MORE
                <i className="material-icons right">arrow_drop_down</i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Menu;
