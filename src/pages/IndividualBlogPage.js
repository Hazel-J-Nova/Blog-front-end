import Header from "../components/Main/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getIndividualBlog } from "../utils/api";

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
  console.log(blogState);
  return <h1>Hello This is the blog page for {id.id}</h1>;
};

export default IndividualBlogPage;
