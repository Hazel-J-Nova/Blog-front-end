import { useState } from "react";
import { Link } from "react-router-dom";
import "./BlogEntry.scss";
import parse from "html-react-parser";
import getAmountOfTime from "../../utils/date";
import TextEditor from "../Forms/TextEditor";
import axios from "axios";

const BlogEntry = (props) => {
  const [formInfo, setFormInfo] = useState({
    commentBody: "",
  });

  const axiosSubmit = (event) => {
    event.preventDefault();

    let sendUrl = `evening-crag-18215.herokuapp.com`;

    axios({
      method: "POST",
      url: sendUrl,
      data: formInfo,

      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("Success, firm added");
        } else {
          console.log("Error occurred");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleChange = (event) => {
    setFormInfo((prevFormData) => {
      return { ...prevFormData, [event.target.name]: event.target.value };
    });
  };

  const fullBlogOrBlogLink = props.blogBody ? (
    <p>{parse(props.individualBlogState.body)}</p>
  ) : (
    <h4>
      <Link to={`/blog/${props.individualBlogState._id}`}>{props.Link}</Link>
    </h4>
  );

  const textEdditor = props.singleBlog ? (
    <div className="form-group">
      <label htmlFor="project-body">Blog body</label>

      <TextEditor
        className="form-control text-area"
        id="commentBody"
        name="commentBody"
        onChange={handleChange}
        value={formInfo.commentBody}
        getBlogBody={setFormInfo}
        formInfo={formInfo}
        body={formInfo.commentBody}
      />
      <button onClick={axiosSubmit} className="btn btn-primary">
        submit
      </button>
    </div>
  ) : null;

  const today = new Date();
  const datePosted = new Date(props.individualBlogState.date);
  const [timeSincePosted, timeSincePostedFormatting] = getAmountOfTime(
    today,
    datePosted
  );

  let tags = JSON.parse(JSON.stringify(props.individualBlogState.tags));
  const tagArray = tags.map((el) => {
    return <li>{el}</li>;
  });

  return (
    <div>
      <div className="blog-container">
        <div className="blog-header">
          <div>
            <div className="blog-author--no-cover">
              <h4>Hazel Tate</h4>
            </div>
          </div>
        </div>

        <div className="blog-body">
          <div className="blog-title">
            <h4>{props.individualBlogState.title}</h4>
          </div>
          <div className="blog-summary">
            <p>{props.individualBlogState.introText}</p>
            {fullBlogOrBlogLink}
          </div>
          <div className="blog-tags">
            {" "}
            <ul>{tagArray}</ul>{" "}
          </div>
        </div>

        <div className="blog-footer">
          <ul>
            <li className="published-date">
              {timeSincePosted} {timeSincePostedFormatting}
            </li>
            <li className="comments">
              <a href="#">
                <svg className="icon-bubble"></svg>
                <span className="numero"></span>
              </a>
            </li>
            <li className="shares">
              <a href="#">
                <svg className="icon-star"></svg>
                <span className="numero"></span>
              </a>
            </li>
          </ul>
        </div>
        <> {props.children} </>
        {textEdditor}
      </div>
    </div>
  );
};

export default BlogEntry;
