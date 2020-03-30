import React, { Component } from "react";
import "./styles/Navbar.css";
import logo from "../images/badge-header.svg";
import { NavLink } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <NavLink className="Navbar_brand" to="/">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold">Conf</span>
          </NavLink>
        </div>
      </div>
    );
  }
}
