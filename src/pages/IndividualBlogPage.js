import Header from "../components/Main/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getIndividualBlog } from "../utils/api";
import Footer from "../components/Main/Footer";
import IndividualBlog from "./IndividualBlog";

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
      <IndividualBlog
        commentState={commentState}
        setCommentState={setCommentState}
        title="words narg"
        subTitle="short message"
        intro="an intrp"
        body="text for a body"
      ></IndividualBlog>
      <Footer />
    </div>
  );
};

export default IndividualBlogPage;
