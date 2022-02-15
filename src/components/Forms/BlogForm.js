import "./BlogForm.css";
import axios from "axios";
import FormData from "form-data";

import { useState } from "react";
import TextEditor from "./TextEditor";

const BlogForm = () => {
  const [formInfo, setFormInfo] = useState({
    blogTitle: "",
    blogBody: "",
    image: null,
  });

  const axiosSubmit = (event) => {
    event.preventDefault();

    let formData = new FormData();
    let fileData = formInfo.image;
    let sendUrl = `http://localhost:4500/admin/blog`;
    formData.append("image", fileData);
    formData.append("title", formInfo.blogTitle);
    formData.append("body", formInfo.blogBody);
    axios({
      method: "POST",
      url: sendUrl,
      data: formData,

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
  const handleFileChange = (event) => {
    setFormInfo((prevFormData) => {
      console.log(event.target.files[0]);

      return { ...prevFormData, [event.target.name]: event.target.files[0] };
    });
  };

  return (
    <div className="row container">
      <form
        action="/projects/new"
        method="post"
        noValidate
        className="validated-form"
        encType="multipart/form-data"
      >
        <div className="form-group">
          <label htmlFor="project-title">Blog Title</label>
          <input
            type="text"
            name="blogTitle"
            id="blogTitle"
            value={formInfo.blogTitle}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="project-body">Blog body</label>

          <TextEditor
            className="form-control text-area"
            id="blogBody"
            name="blogBody"
            onChange={handleChange}
            value={formInfo.blogBody}
            getBlogBody={setFormInfo}
            formInfo={formInfo}
            blogBody={formInfo.blogBody}
          />
        </div>
        <div className="mb-3">
          <div className="form-file custom-file">
            <input
              type="file"
              className="form-file-input"
              id="image"
              name="image"
              onChange={handleFileChange}
              files={formInfo.image}
            />
            <label className="form-file-label" htmlFor="image">
              <span className="form-file-text custom-file-label">
                Choose image(s)...
              </span>
              <span className="form-file-button">Browse</span>
            </label>
          </div>
        </div>
        <button onClick={axiosSubmit} className="btn btn-primary">
          submit
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
