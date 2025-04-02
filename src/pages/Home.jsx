import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Welcome to React Assignment</h1>
      <p>Select a component to view:</p>
      <ul>
        <li>
          <Link to="/person">Person Component</Link>
        </li>
        <li>
          <Link to="/toggle-message">Toggle Message</Link>
        </li>
        <li>
          <Link to="/user-greeting">User Greeting</Link>
        </li>
        <li>
          <Link to="/password-toggle">Password Toggle</Link>
        </li>
        <li>
          <Link to="/theme-switcher">Theme Switcher</Link>
        </li>
        <li>
          <Link to="/todo-app">TODO App</Link>
        </li>
        <li>
          <Link to="/users">Users List (API)</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
