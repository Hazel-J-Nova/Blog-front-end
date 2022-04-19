import "./BlogForm.css";
import axios from "axios";
import FormData from "form-data";
import Header from "../Main/Header";
import Footer from "../Main/Footer";
import { useState } from "react";
import TextEditor from "./TextEditor";

const BlogForm = () => {
  const [formInfo, setFormInfo] = useState({
    blogTitle: "",
    blogBody: "",
    image: null,
    blogTags: [],
    blogIntro: "",
  });

  const axiosSubmit = (event) => {
    event.preventDefault();

    let formData = new FormData();
    let fileData = formInfo.image;
    let sendUrl = `evening-crag-18215.herokuapp.com/admin/blog`;
    formData.append("image", fileData);
    formData.append("title", formInfo.blogTitle);
    formData.append("body", formInfo.blogBody);
    formData.append("tags", formInfo.blogIntro);
    formData.append("body", formInfo.blogIntro);
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
      console.log(formInfo);
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
    <div>
      <Header></Header>
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
            <label htmlFor="project-title">Blog Intro</label>
            <input
              type="text"
              name="blogIntro"
              id="blogIntro"
              value={formInfo.blogIntro}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="project-title">Blog Tags</label>
            <input
              type="text"
              name="blogTags"
              id="blogTags"
              value={formInfo.blogTags}
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
      <Footer></Footer>
    </div>
  );
};

export default BlogForm;
