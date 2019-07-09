import axios from "axios";

const API_ROOT = "http://localhost:3000/api";

async function getAllPost() {
  try {
    const result = await axios.get(`${API_ROOT}/posts`);
    console.log("This is the result", result);
    return result.data;
  } catch (err) {
    return err;
  }
}

async function getAPost(paramID) {
  try {
    const result = await axios.get(`${API_ROOT}/posts/${paramID}`);

    return result;
  } catch (err) {
    return err;
  }
}

async function createAPost(data) {
  try {
    const result = await axios.post(`${API_ROOT}/posts`, {
      title: data.title,
      content: data.content,
      picture: data.picture
    });
    return result;
  } catch (err) {
    return err;
  }
}

async function createAComment(postID) {
  try {
    const result = await axios.post(`${API_ROOT}/posts/${postID}/comments`);
    return result;
  } catch (err) {
    return err;
  }
}

export default {
  API_ROOT,
  getAllPost,
  createAPost,
  getAPost
};
