import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="main-common-style center">
      <div className="container-common-style row-center-between p-10-20">
        <Link to="/" className="logo-title center">
          XON STORE 🛒
        </Link>
        <div className="center gap-20">
          <div className="column-center btn-width w-80 gap-10">
            <button className="center p-5-10 button-common-style nav-btn">
              +
            </button>
            <p className="nav-text">Create New Product</p>
          </div>
          <div className="column-center btn-width w-80 gap-10">
            <button className="center p-5-10 button-common-style nav-btn">
              <FaPhoneAlt size="0.75rem" />
            </button>
            <p className="nav-text">Contact The Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
