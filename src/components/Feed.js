import React, { useContext } from "react";
import UserLists from "./UserLists";
import DataContext from "../context/DataContext";

const Feed = () => {
  let { users } = useContext(DataContext);
  return (
    <>
      <h1>Users Data</h1>
      <hr />
      {users.map((user) => (
        <UserLists key={user.id} user={user} />
      ))}
    </>
  );
};

export default Feed;
