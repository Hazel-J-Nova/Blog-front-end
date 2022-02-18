import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./BlogEntry.scss";
import CommentCard from "./CommentCard";
import parse from "html-react-parser";
import getAmountOfTime from "../../utils/date";
import TextEditor from "../Forms/TextEditor";

const BlogEntry = (props) => {
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
        id="blogBody"
        name="blogBody"
        //   onChange={handleChange}
        //   value={formInfo.blogBody}
        //   getBlogBody={setFormInfo}
        //   formInfo={formInfo}
        //   blogBody={formInfo.blogBody}
      />
    </div>
  ) : null;

  const today = new Date();
  const datePosted = new Date(props.individualBlogState.date);
  const [timeSincePosted, timeSincePostedFormatting] = getAmountOfTime(
    today,
    datePosted
  );

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
          <div className="blog-tags">{/* <ul>{blogTags}</ul> */}</div>
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
