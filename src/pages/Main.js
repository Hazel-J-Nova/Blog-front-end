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
import Blog from "../components/Main/BlogCard";
import axios from "axios";
import { Editor, EditorState } from "draft-js";

const url = "http://localhost:4500/";

const Main = (props) => {
  const [portfolioState, setPortfolioState] = useState([]);
  const [hasInterAcctedState, setInterAcctedState] = useState(false);
  const [blogState, setBlogState] = useState([]);
  const [userState, setUserState] = useState({});
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);
  useEffect(() => {
    const getUser = async () => {
      const user = await axios.get(url);
      setUserState(user);
    };
    getUser();
  }, []);

  useEffect(() => {
    const getAllBlogs = async () => {
      const blogs = await axios.get(`${url}admin/blog`);
      setBlogState([...blogs.data]);
      console.log(blogState);
    };
    getAllBlogs();
  }, []);

  const blogsToRender = blogState.map((el) => {
    return (
      <Blog
        imgUrl={el.img.url}
        blogTitle={el.title}
        intoText={el.body}
        blogLink="#"
        key={el._id}
        blogLink={el._id}
      >
        {" "}
        {el.img.url}
      </Blog>
    );
  });

  return (
    <div>
      <Header user={userState} setUserState={setUserState} />
      <Intro />
      <AboutMe />
      {<Grid>{blogsToRender}</Grid>}
      <PortfolioGrid>{portfolioState}</PortfolioGrid>
      <Footer emailAddress="Hazel.J.Tate@gmail.com" />
    </div>
  );
};

export default Main;
