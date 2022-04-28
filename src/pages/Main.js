import Intro from "../components/Main/Intro";
import AboutMe from "../components/Main/AboutMe";
import Grid from "../components/Main/grid";
import Services from "../components/Main/services";
import Header from "../components/Main/Header";
import PortfolioGrid from "../components/Main/PortGrid";
import PortfolioItem from "../components/Main/PortItem";
import Footer from "../components/Main/Footer";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Blog from "../components/Main/BlogCard";
import axios from "axios";
import { Context } from "../App";
import { getPortfolioItems } from "../utils/api";

const url = "https://evening-crag-18215.herokuapp.com/";

const Main = ({ userState, setUserState }) => {
  const [portfolioState, setPortfolioState] = useState([]);
  const [hasInterAcctedState, setInterAcctedState] = useState(false);
  const [blogState, setBlogState] = useState([]);

  useEffect(() => {
    const getAllBlogs = async () => {
      const blogs = await axios.get(`${url}admin/blog`);
      setBlogState([...blogs.data]);
    };
    getAllBlogs();
  }, []);

  useEffect(() => {
    const getPortfolio = async () => {
      const portfolio = await getPortfolioItems();
      setPortfolioState([...portfolio.data]);
    };
    getPortfolio();
  }, []);

  const blogsToRender = blogState.slice(0, 4).map((el) => {
    return (
      <Blog
        imgUrl={""}
        blogTitle={el.title}
        intoText={el.intro}
        key={el._id}
        blogLink={el._id}
      >
        {" "}
        {/* {el.img.url} */}
      </Blog>
    );
  });
  const portfolioToDisplay = portfolioState.map((el) => {
    return;
    <PortfolioItem
      image={el.image}
      alt={el.alt}
      link={el.link}
      key={el._id}
    ></PortfolioItem>;
  });

  const value = useContext(Context);
  return (
    <div>
      <Header user={userState} setUserState={setUserState} />
      <Intro />;
      <AboutMe />
      <Services></Services>
      <Grid>{blogsToRender}</Grid>
      <Link to={`blogs`} blogstate={blogState}>
        <h1 className="centered">All Blogs</h1>
      </Link>
      <PortfolioGrid>{portfolioToDisplay}</PortfolioGrid>
      <Footer />{" "}
    </div>
  );
};

export default Main;
