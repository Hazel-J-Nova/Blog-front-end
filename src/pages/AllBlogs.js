import { useState, useEffect } from "react";
import IndividualBlog from "./IndividualBlog";
import BlogEntry from "../components/Blog/BlogEntry";
import axios from "axios";
import Header from "../components/Main/Header";
import Footer from "../components/Main/Footer";
const url = "http://localhost:4500/";

const AllBlogs = (props) => {
  const [blogState, setBlogState] = useState([]);
  useEffect(() => {
    const getAllBlogs = async () => {
      const blogs = await axios.get(`${url}admin/blog`);

      setBlogState([...blogs.data]);
    };
    getAllBlogs();
  }, []);

  const allBlogs = blogState.map((el, index) => {
    const individualBlogState = el;

    return (
      <div>
        <div key={index}>
          <BlogEntry
            individualBlogState={individualBlogState}
            Link={individualBlogState._id}
          />
          ;
        </div>
      </div>
    );
  });
  return (
    <div>
      <Header></Header>
      {allBlogs}
      <Footer></Footer>
    </div>
  );
};

export default AllBlogs;
