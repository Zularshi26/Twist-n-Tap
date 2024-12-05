import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
    <div>
      <header>
        <nav>
          <a href="#" className="active">Home</a>
          <a href="#">About</a>
          <a href="#">Portfolio</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
          <Link to="/login-register" className="login">Login</Link>
        </nav>
      </header>
      </div>
    </>
  );
};

export default Navbar;
