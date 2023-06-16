import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import DataContext from "../context/DataContext";

const EditUser = () => {
  let { handleEdit, editSkill, setEditSkill, editName, setEditName, users } =
    useContext(DataContext);
  let { id } = useParams();
  let user = users.find((user) => user.id.toString() === id);
  useEffect(() => {
    if (user) {
      setEditName(user.name);
      setEditSkill(user.skill);
    }
  }, [user, setEditSkill, setEditName]);
  return (
    <main className="NewUser">
      {editName && (
        <>
          <h2>Edit User :</h2>
          <form onSubmit={(e) => e.preventDefault()} className="newUserForm">
            <label htmlFor="editTitle">Name :</label>
            <input
              type="text"
              placeholder="title"
              id="editTitle"
              required
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
            <label htmlFor="editBody">Skills :</label>
            <textarea
              placeholder="comments"
              id="editBody"
              required
              value={editSkill}
              onChange={(e) => setEditSkill(e.target.value)}
            />
            <button className="submitBtn" onClick={() => handleEdit(user.id)}>
              Update
            </button>
          </form>
        </>
      )}
      {!editName && (
        <>
          <h2>User not found</h2>
          <Link to="/">
            <p>Kindly Visit Our Homepage and Explore</p>
          </Link>
        </>
      )}
    </main>
  );
};

export default EditUser;
