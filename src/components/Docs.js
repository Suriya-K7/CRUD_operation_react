import React from "react";

const Docs = () => {
  return (
    <main className="Docs">
      <h2>Docs</h2>
      <p>
        Hi, I'm Suriya, This app created by impelmeting CRUD operations on user
        data through local storage. And react-router-dom used for routing.
        Through axios mock server created for fetching from mock server from
        folder Data/da.json but it was commented on code (due to mock server
        does not work in real app). So CRUD implemented through local storage.
      </p>
      <ul>
        <h3>Usage</h3>
        <li>after url+"/" will lead to home page with discription about app</li>
        <li>
          after url+"/users" will lead to user page where it will show all user
          data
        </li>
        <li>
          after url+"/create-user" will lead to new user page where can new user
          can be added
        </li>
        <li>
          after url+"/users/user/:id" will lead to selected user page where it
          will show selected user data
        </li>
        <li>
          after url+"/edit-user/:id" will lead to edit user page where user data
          can be edited
        </li>
        <li>
          after url+"/docs" will lead to Docs page where router link data
          displayed
        </li>
        <li>after url+"invalid key word" will lead to missing/invalid page</li>
      </ul>
    </main>
  );
};

export default Docs;
