import React from "react";
import "./navbar.css";
import { Link, Outlet } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="main-common-style column-center">
      <div className="container-common-style row-center-between p-10-20">
        <Link to="/" className="logo-title center">
          XON STORE 🛒
        </Link>
        <div className="center gap-20">
          <div className="column-center btn-width w-80 gap-10">
            <Link to="/create" style={{ textDecoration: "none" }}>
              <button className="center p-5-10 button-common-style nav-btn">
                +
              </button>
            </Link>
            <p className="nav-text">Create New Product</p>
          </div>
          <div className="column-center btn-width w-80 gap-10">
            <a style={{textDecoration: "none"}} target="_blank" href="https://github.com/Qoqondabitta?tab=overview&from=2023-04-01&to=2023-04-13">
              <button className="center p-5-10 button-common-style nav-btn">
                <FaPhoneAlt size="0.75rem" />
              </button>
            </a>
            <p className="nav-text">Contact The Developer</p>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
