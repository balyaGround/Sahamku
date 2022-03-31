import React from "react";
import { Link } from "react-router-dom";

import logo from "../img/logo.jpg";
function Header() {
  return (
    <>
      <div className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow mb-5">
        <img src={logo} alt="" width="100px" height="100px" />
        <p>Dashboard</p>

        <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <Link to="/">
              <a className="nav-link px-3">Sign out</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
