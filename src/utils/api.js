import axios from "axios";
const url = "evening-crag-18215.herokuapp.com";

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
  await axios({
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
        return "error ";
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

export const addNewComment = async (comment, userId) => {
  const newComment = await axios
    .post(`${url}/admin/comment`, {
      message: comment,
      user: userId,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getAllComments = async () => {
  const comments = await axios.get(`${url}/admin/comments`);
  return comments;
};

export const deleteComment = async (commentId) => {
  await axios.delete(`${url}/admin/${commentId}`);
};

export const editComment = async (user, commentBody, commentId) => {
  let response = axios.patch(`${url}/admin/comment/${commentId}
  `);
  return response;
};

export const sendEmail = async (message, emailAddress, subject) => {
  try {
    const response = await axios.post(`${url}/admin/email`, {
      message,
      emailAddress,
      subject,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
