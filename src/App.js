import react, { useState, useEffect, createContext, useMemo } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogForm from "./components/Forms/BlogForm";
import AddPortfolio from "./pages/AddPortfolio";
import Main from "./pages/Main";

import IndividualBlogPage from "./pages/IndividualBlogPage";
import axios from "axios";
import AllBlogs from "./pages/AllBlogs";
const url = "evening-crag-18215.herokuapp.com";

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
    };
    getUser();
  }, []);

  return (
    <Context.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="admin/blog" element={<BlogForm />} />
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
/* /* <Route path="/" element={<Main />} />
        <Route path="BlogForm" element={<BlogForm />} />
        <Route path="login" element={<Invoices />} />
        <Route path="*" */
/* /</Routes> */

// );
//useEffect(() => {
//const data = ApiCall
//setPortfolioState(data.portfolioCall)
//setBlogState(data.blogCall),
//[hasInteracted]
//});

// const [hasInteracted, setHaseInteracted] = 0;
//To DO//
// setBlogState(ApiCall.map(el)=>{
// return(
//<jsx/>
//)
//})

//To Do//
//setPortfolioState(ApiCall.map((ell)=>{
//  {JSX}
//}))
// return <div>{/* <BlogForm /> */}</div>;
// }

// <div>
//       <button onClick={() => setIsOpen(!isOpen)}>Open Modal</button>
//       <Modal open={isOpen}> Fancy Modal</Modal>
//     </div>
