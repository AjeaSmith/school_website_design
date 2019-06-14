import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/App.scss";
import M from "materialize-css";
const Menu = () => {
  useEffect(() => {
    const Dropdown = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(Dropdown, {});
  });
  return (
    <React.Fragment>
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
              <Link to="/Admission">ADMISSION</Link>
            </li>
            <li>
              <Link to="/Calendar">CALENDAR</Link>
            </li>
            <li>
              <Link to="/Curriculum">CURRICULUM</Link>
            </li>
            <li>
              <Link to="/Student">STUDENT</Link>
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
