import React, { useContext } from "react";
import Feed from "./Feed";
import DataContext from "../context/DataContext";

const UserDatas = () => {
  let { users } = useContext(DataContext);
  return (
    <main className="UserData">
      {users.length ? (
        <Feed users={users} />
      ) : (
        <p style={{ marginTop: "2rem" }}>No users to display.</p>
      )}
    </main>
  );
};

export default UserDatas;
