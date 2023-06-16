import React from "react";
import { Link } from "react-router-dom";

const UserLists = ({ user }) => {
  return (
    <article className="user">
      <Link to={`user/${user.id}`}>
        <h2>Name : {user.name}</h2>
        <p className="Date">Udpdated on : {user.datetime}</p>
        <p className="Date">
          Skills -{" "}
          {user.skill.length <= 25
            ? user.skill
            : `${user.skill.slice(0, 25)}...`}
        </p>
      </Link>
    </article>
  );
};

export default UserLists;
