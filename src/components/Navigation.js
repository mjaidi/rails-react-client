import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {localStorage.getItem("jwt") ? (
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact className="nav-link" activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              className="nav-link"
              activeClassName="active"
              to="/articles"
            >
              Articles
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact className="nav-link" to="/logout">
              Log Out
            </NavLink>
          </li>
        </ul>
      ) : (
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact className="nav-link" activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              className="nav-link"
              activeClassName="active"
              to="/login"
            >
              Log In
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
