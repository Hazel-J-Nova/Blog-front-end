import Header from "../components/Main/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getIndividualBlog } from "../utils/api";
import Footer from "../components/Main/Footer";
import BlogEntry from "../components/Blog/BlogEntry";
import CommentCard from "../components/Blog/CommentCard";

import axios from "axios";
const url = "http://localhost:4500/";
const IndividualBlogPage = () => {
  const id = useParams();
  const [commentState, setCommentState] = useState([]);
  const [blogState, setBlogState] = useState({});
  useEffect(() => {
    const blog = async () => {
      const singleBlog = await axios.get(
        `http://localhost:4500/admin/blog/${id.id}`
      );
      setBlogState({ ...singleBlog.data });
      setCommentState(blogState.comments);
    };
    blog();
  }, []);

  return (
    <div>
      <Header></Header>
      <BlogEntry
        singleBlog={true}
        individualBlogState={blogState}
        blogBody={blogState.body}
      ></BlogEntry>
      <Footer />
    </div>
  );
};

export default IndividualBlogPage;
