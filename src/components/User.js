import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "../context/DataContext";

const User = () => {
  let { users, handleDelete } = useContext(DataContext);
  let { id } = useParams();
  let selectedUsed = users.find((user) => user.id.toString() === id);
  return (
    <main className="UserPage">
      <article className="user">
        {selectedUsed && (
          <>
            <h2>Name : {selectedUsed.name}</h2>
            <p className="Date">Updated on : {selectedUsed.datetime}</p>
            <p className="userSkill">Skill sets : {selectedUsed.skill} </p>
            <Link to={`/edit-user/${selectedUsed.id}`}>
              <button className="editButton">Edit</button>
            </Link>
            <button
              className="deleteButton"
              onClick={() => handleDelete(selectedUsed.id)}
            >
              Delete
            </button>
          </>
        )}
        {!selectedUsed && (
          <>
            <h2>Post not found</h2>
            <Link to="/">
              <p>Kindly Visit Our Homepage and Explore</p>
            </Link>
          </>
        )}
      </article>
    </main>
  );
};

export default User;
