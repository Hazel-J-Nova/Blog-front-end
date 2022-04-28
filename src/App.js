import { useState, useEffect, createContext, useMemo } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogForm from "./components/Forms/BlogForm";
import AddPortfolio from "./pages/AddPortfolio";
import Main from "./pages/Main";
import EditBlogs from "./pages/EditBlogs";
import EditPortfolio from "./pages/EditPortfolio";

import IndividualBlogPage from "./pages/IndividualBlogPage";
import axios from "axios";
import AllBlogs from "./pages/AllBlogs";
const url = "https://evening-crag-18215.herokuapp.com";

export const Context = createContext({
  userState: false,
  setUserState: () => {},
});

function App() {
  const [userState, setUserState] = useState({});
  const value = useMemo(() => ({ userState, setUserState }), [userState]);

  useEffect(() => {
    const getUser = async () => {
      const user = await axios.get(url);
      setUserState(user.data);
    };
    getUser();
  }, []);

  return (
    <Context.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="admin/blog" element={<BlogForm />} />
          <Route path="admin/editBlogs" element={<EditBlogs />} />
          <Route path="admin/editPortfolio" element={<EditPortfolio />} />
          <Route
            path="admin/portfolio"
            element={<AddPortfolio></AddPortfolio>}
          />
          <Route path="blogs" element={<AllBlogs />} />
          <Route path="blog/:id" element={<IndividualBlogPage />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}
export default App;
