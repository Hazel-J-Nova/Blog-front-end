import axios from "axios";
const url = "http://localhost:4500";

export const logInUser = async (username, password) => {
  try {
    const response = await axios.post(`${url}/users/login`, {
      username,
      password,
    });

    return "responce.data";
  } catch (error) {
    console.log(error);
    return "error";
  }
};

export const registerUser = async (username, email, password) => {
  const formData = { username, email, password };
  axios({
    method: "POST",
    url: `${url}/users/register`,
    data: formData,
  })
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data);
        return response.data;
      } else {
        console.log("Error occurred");
        return "error";
      }
    })
    .catch((e) => {
      console.log(e);
    });
};
const logOutUser = () => {
  return null;
};

const deleteUser = () => {
  return null;
};

const postNewBlogEntry = () => {
  return null;
};

const deleteBlogEntry = () => {
  return null;
};

const editBlogEntry = () => {
  return null;
};

export const getAllBlogs = async () => {
  const blogs = await axios.get(`${url}`);
  return blogs;
};

export const getIndividualBlog = async (blogId) => {
  const blog = await axios.get(`${url}/admin/blog/${blogId}`);
  return blog;
};

const addNewPorfolioProject = () => {
  return null;
};

const deletePorfolioProject = () => {
  return null;
};

const editPortfolioProject = () => {
  return null;
};

const addNewComment = () => {
  return null;
};

const deleteComment = () => {
  return null;
};

const editComment = () => {
  return null;
};
