import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <h2>Hi,</h2>
      <p>In this App, I implemented CURD operation.</p>
      <p>for viewing, editing deleting click below button to view users data</p>
      <p>Or click Users from Nav-bar</p>
      {/* <br /> */}
      <Link to="/user">
        <button className="editButton">Users</button>
      </Link>
      {/* <br /> */}
      {/* <br /> */}
      <p>If need to create a new user click below button</p>
      <p>Or click New user from Nav-bar</p>
      {/* <br /> */}
      <Link to="/create-user">
        <button className="editButton">New user</button>
      </Link>
      {/* <br /> */}
      {/* <br /> */}
      <p>for App Docs KKindly visit Docs from Navbar or click below button</p>
      {/* <br /> */}
      <Link to="/docs">
        <button className="editButton">Docs</button>
      </Link>
    </div>
  );
};

export default Home;
