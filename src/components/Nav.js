import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="Nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/create-user">New User</Link>
        </li>
        <li>
          <Link to="docs">Docs/Usage</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
