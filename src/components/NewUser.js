import React, { useContext } from "react";
import DataContext from "../context/DataContext";

const NewUser = () => {
  let { handleSubmit, setUserSkill, userSkill, userName, setUserName } =
    useContext(DataContext);
  return (
    <main className="NewUser">
      <h2>New User :</h2>
      <form onSubmit={handleSubmit} className="newUserForm">
        <label htmlFor="userTitle">Name:</label>
        <input
          type="text"
          placeholder="Name"
          id="userTitle"
          required
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="userBody">Skills:</label>
        <textarea
          placeholder="Skills"
          id="userBody"
          required
          value={userSkill}
          onChange={(e) => setUserSkill(e.target.value)}
        />
        <button className="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </main>
  );
};

export default NewUser;
