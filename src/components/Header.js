import React from "react";
import "../styles/App.scss";

const Header = () => {
  return (
    <nav className="nav_header">
      <div className="nav_wrapper">
        <a href="/" className="brand_logo left">
          Wave Program
        </a>
        <ul className="right">
          <li className="hide-on-small-only">
            <a
              href="https://weocflex.learning.powerschool.com/do/account/login"
              className="btn btn-flat grey black-text lighten-2"
            >
              POWERSCHOOL LEARNING LOGIN
            </a>
          </li>
          <li className="hide-on-med-and-up">
            <a
              href="https://weocflex.learning.powerschool.com/do/account/login"
              className="btn btn-flat btn-small grey black-text lighten-2 login"
            >
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
