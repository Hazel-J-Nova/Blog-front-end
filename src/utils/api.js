import axios from "axios";
const url = "http://localhost:4500/";
const logInUser = () => {
  return null;
};

export const registerUser = async ({ userName, email, password }) => {
  try {
    const response = await axios.post(`${url}/users/register`, {
      userName,
      email,
      password,
    });
  } catch (error) {
    console.log(error);
  }
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
  const blogs = await axios.get(`${url}/admin/blogs`);
  return blogs;
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
