import react, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import BlogForm from "./components/Forms/BlogForm";
import LogIn from "./LogIn";
import Invoices from "./Invoices";
import Main from "./pages/Main";
import Modal from "./components/Forms/Modal";
import Portal from "./components/Forms/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="BlogForm" element={<BlogForm />} />
          <Route path="login" element={<LogIn />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
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
