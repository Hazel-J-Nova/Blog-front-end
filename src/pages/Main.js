import Intro from "../components/Main/Intro";
import AboutMe from "../components/Main/AboutMe";
import Grid from "../components/Main/grid";
import Header from "../components/Main/Header";
import PortfolioGrid from "../components/Main/portfolioGrid";
import Footer from "../components/Main/Footer";
import React, { useEffect, useState } from "react";
import Modal from "../components/Forms/Modal";
import Portal from "../components/Forms/Modal";
import { Link, Outlet, Routes, Route } from "react-router-dom";
import { getAllBlogs } from "../utils/api";
import Blog from "../components/Main/blog";

const Main = (props) => {
  const [portfolioState, setPortfolioState] = useState([]);
  const [hasInterAcctedState, setInterAcctedState] = useState(false);
  const [blogState, setBlogState] = useState([]);
  const [userState, setUserState] = useState({});
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);
  useEffect(() => {
    const blog = getAllBlogs();
    setBlogState([blog]);
  }, []);
  const mostRecentBlogs = getAllBlogs();
  // const blogsToRender = mostRecentBlogs.map((el) => {
  //   console.log(el.image);
  // });
  console.log(blogState);

  return (
    <div>
      <Header />
      <Outlet />
      <Link to="/BlogForm">BlogForm</Link>|<Link to="/login">Expenses</Link>
      <Intro />
      <AboutMe />
      {/* <Grid>{mostRecentBlogs}</Grid> */}
      <PortfolioGrid>{portfolioState}</PortfolioGrid>
      <Footer emailAddress="Hazel.J.Tate@gmail.com" />
    </div>
  );
};

export default Main;
