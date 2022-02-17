import { useState, useEffect } from "react";
import IndividualBlog from "./IndividualBlog";
import BlogEntry from "../components/Blog/BlogEntry";
import axios from "axios";

const url = "http://localhost:4500/";

const AllBlogs = (props) => {
  const [blogState, setBlogState] = useState([]);
  useEffect(() => {
    const getAllBlogs = async () => {
      const blogs = await axios.get(`${url}admin/blog`);
      setBlogState([...blogs.data]);
      console.log(blogState);
    };
    getAllBlogs();
  }, []);

  const allBlogs = blogState.map((el, index) => {
    return (
      <div key={index}>
        <BlogEntry />;
      </div>
    );
  });

  return <div>{allBlogs}</div>;
};

export default AllBlogs;
