import { createContext, useEffect, useState } from "react";
import { format } from "date-fns";
import useWindowSize from "../hooks/useWindowSize";
import { useNavigate } from "react-router-dom";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  let [userName, setUserName] = useState("");
  let [editName, setEditName] = useState("");
  let [userSkill, setUserSkill] = useState("");
  let [editSkill, setEditSkill] = useState("");
  let { width } = useWindowSize();
  // if using through local storage

  let [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || [
      {
        id: 1,
        name: "Suriya",
        datetime: "June 01, 2023 12:29:36 PM",
        skill: "HTML & CSS",
      },
      {
        id: 2,
        name: "SK7",
        datetime: "June 01, 2023 12:29:36 PM",
        skill: "JS",
      },
      {
        id: 3,
        name: "US",
        datetime: "June 01, 2023 12:29:36 PM",
        skill: "React",
      },
    ]
  );
  useEffect(() => {
    let localStorageUsers = JSON.parse(localStorage.getItem("users")) || [
      {
        id: 1,
        name: "Suriya",
        datetime: "June 15, 2023 12:29:36 PM",
        skill: "HTML & CSS",
      },
      {
        id: 2,
        name: "SK7",
        datetime: "June 01, 2023 10:29:36 PM",
        skill: "JS",
      },
      {
        id: 3,
        name: "US",
        datetime: "may 01, 2023 1:29:36 PM",
        skill: "React",
      },
    ];
    setUsers(localStorageUsers);
  }, []);
  // useEffect(() => {
  //   let localStoragePosts = JSON.parse(localStorage.getItem("post")) || [];
  //   // console.log(localStoragePosts);

  // setPosts(localStoragePosts);
  // setSearchResults(localStoragePosts.reverse());
  // }, [posts]);

  // useEffect(() => {
  //   let localStoragePosts = JSON.parse(localStorage.getItem("post")) || [];
  //   let filteredPosts = localStoragePosts.filter(
  //     (post) =>
  //       post.title.toLowerCase().includes(search.toLowerCase()) ||
  //       post.body.toLowerCase().includes(search.toLowerCase())
  //   );
  //   setSearchResults(filteredPosts.reverse());
  // }, [posts, search]);
  /*---------------------------- */
  // if used from server
  /*
      let [posts, setPosts] = useState([]);
  useEffect(() => {
    let fetchPost = async () => {
      try {
        let response = await api.get("/posts");
        setPosts(response.data);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log(error);
        }
      }
    };
    fetchPost();
  }, []);
  useEffect(() => {
    let filteredPosts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredPosts.reverse());
  }, [posts, search]);
  */
  /*------------------------------------- */
  let navigate = useNavigate();
  let handleSubmit = async (e) => {
    e.preventDefault();
    let id = users.length ? users[users.length - 1].id + 1 : 1;
    let datetime = format(new Date(), "MMMM dd, yyyy pp");
    let newUser = { id, name: userName, datetime, skill: userSkill };
    // if used from server
    /*
    try {
      let response = await api.post("/posts", newPost);
      let allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostBody("");
      setPostTitle("");
      navigate("/");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else {
        console.log(error);
      }
    }*/
    /*--------------------------- */
    // if using through local storage
    let allUsers = [...users, newUser];
    setUsers(allUsers);
    setUserName("");
    setUserSkill("");
    navigate("/user");
    localStorage.setItem("users", JSON.stringify(allUsers));

    /*---------------------------- */
  };
  let handleDelete = async (id) => {
    // if used from server
    /*
    try {
      await api.delete(`/posts/${id}`);
      let filteredPosts = posts.filter((post) => post.id !== id);
      setPosts(filteredPosts);
      navigate("/");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else {
        console.log(error);
      }
    }
    */
    /*----------------------------- */
    // if using through local storage
    let filteredUsers = users.filter((post) => post.id !== id);
    setUsers(filteredUsers);
    navigate("/user");
    localStorage.setItem("users", JSON.stringify(filteredUsers));
    /*---------------------------- */
  };
  let handleEdit = async (id) => {
    let datetime = format(new Date(), "MMMM dd, yyyy pp");
    let editedUser = { id, name: editName, datetime, skill: editSkill };
    // if used from server
    /*
    try {
      let response = await api.put(`/posts/${id}`, editedPost);
      let updatedPost = posts.map((post) =>
        post.id === id ? { ...response.data } : post
      );
      setPosts(updatedPost);
      setEditBody("");
      setEditTitle("");
      navigate("/");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else {
        console.log(error);
      }
    }
    */
    /*--------------------------- */
    // if using through local storage
    let updatedUser = users.map((user) =>
      user.id === id ? { ...editedUser } : user
    );
    setUsers(updatedUser);
    setEditSkill("");
    setEditName("");
    navigate("/user");
    localStorage.setItem("users", JSON.stringify(updatedUser));
    /*---------------------------- */
  };
  return (
    <DataContext.Provider
      value={{
        width,
        handleSubmit,
        userSkill,
        setUserSkill,
        userName,
        setUserName,
        users,
        handleDelete,
        handleEdit,
        editName,
        setEditName,
        editSkill,
        setEditSkill,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
