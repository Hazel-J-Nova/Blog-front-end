import Header from "../components/Main/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getIndividualBlog } from "../utils/api";
import Footer from "../components/Main/Footer";
import BlogEntry from "../components/Blog/BlogEntry";

const IndividualBlogPage = () => {
  const id = useParams();
  const [blogState, setBlogState] = useState({});
  useEffect(() => {
    const blog = async () => {
      const singleBlog = await getIndividualBlog(id.id);
      console.log(singleBlog.data);
      setBlogState({ ...singleBlog.data });
    };
    blog();
  }, []);
  return (
    <div>
      <Header></Header>
      <BlogEntry></BlogEntry>
    </div>
  );
};

export default IndividualBlogPage;
