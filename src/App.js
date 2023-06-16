import UserDatas from "./components/UserDatas";
import Docs from "./components/Docs";
import Footer from "./components/Footer";
import Missing from "./components/Missing";
import NewUser from "./components/NewUser";
import User from "./components/User";
import EditUser from "./components/EditUser";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { DataProvider } from "./context/DataContext";
import Home from "./components/Home";
// if used from server
// import api from "./api/api";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header title="CRUD Task" />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users">
            <Route index element={<UserDatas />} />
            <Route path="user/:id" element={<User />} />
          </Route>
          <Route path="/create-user" element={<NewUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
          <Route path="docs" element={<Docs />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
