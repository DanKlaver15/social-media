import axios from "axios";
import { authHeader } from "../../helpers/authHeader";

import {
  addPost,
  updatePost,
  removePost,
  postInProgress,
  postFailure,
  postSuccess,
  updateFeed,
} from "./actions";

export const addPostRequest = (post) => async (dispatch, getState) => {
  dispatch(postInProgress());

  try {
    const response = await axios.post(
      `http://localhost:5000/api/posts/`,
      post,
      { headers: authHeader() }
    );

    const data = await response.data;

    dispatch(postSuccess());
    dispatch(addPost(data));
  } catch (err) {
    console.log(err);
    if (err.response) {
      dispatch(postFailure(err.response.data.message));
    } else {
      dispatch(postFailure("An unknown error has occured"));
    }
  }
};

export const updatePostRequest = (post) => async (dispatch, getState) => {
  try {
    const response = await axios.put(
      `http://localhost:5000/api/posts/${post._id}`,
      post,
      { headers: authHeader() }
    );

    const data = await response.data;

    dispatch(updatePost(data));
  } catch (err) {
    console.log(err);
    if (err.response) {
      dispatch(postFailure(err.response.data.message));
    } else {
      dispatch(postFailure("An unknown error has occured"));
    }
  }
};

export const removePostRequest = (postId) => async (dispatch, getState) => {
  try {
    const response = await axios.delete(
      `http://localhost:5000/api/posts/${postId}`,
      { headers: authHeader() }
    );

    dispatch(removePost(postId));
  } catch (err) {
    console.log(err);
    if (err.response) {
      dispatch(postFailure(err.response.data.message));
    } else {
      dispatch(postFailure("An unknown error has occured"));
    }
  }
};

export const getFeedRequest = (userId) => async (dispatch, getState) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/posts/${userId}/feed`,
      { headers: authHeader() }
    );

    const feed = await response.data;

    dispatch(updateFeed(feed));
  } catch (err) {
    console.log(err);
    if (err.response) {
      dispatch(postFailure(err.response.data.message));
    } else {
      dispatch(postFailure("An unknown error has occured"));
    }
  }
};
