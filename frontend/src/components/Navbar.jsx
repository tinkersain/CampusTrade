//Tanisha Kar
//CSE D1, Roll No - 23

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#333", color: "white" }}>
      <Link to="/" style={{ color: "white", marginRight: "15px" }}>
        Home
      </Link>
      <Link to="/person" style={{ color: "white", marginRight: "15px" }}>
        Person
      </Link>
      <Link
        to="/toggle-message"
        style={{ color: "white", marginRight: "15px" }}
      >
        Toggle
      </Link>
      <Link to="/user-greeting" style={{ color: "white", marginRight: "15px" }}>
        Greeting
      </Link>
      <Link
        to="/password-toggle"
        style={{ color: "white", marginRight: "15px" }}
      >
        Password
      </Link>
      <Link
        to="/theme-switcher"
        style={{ color: "white", marginRight: "15px" }}
      >
        Theme
      </Link>
      <Link to="/todo-app" style={{ color: "white", marginRight: "15px" }}>
        TODO
      </Link>
      <Link to="/users" style={{ color: "white" }}>
        Users
      </Link>
    </nav>
  );
};

export default Navbar;
