import {
  UPDATE_FEED,
  GET_FEED_IN_PROGRESS,
  GET_FEED_SUCCESS,
  GET_FEED_FAILURE,
} from "./actions";
import { LOGOUT } from "../User/actions";

import { ADD_POST, REMOVE_POST, UPDATE_POST } from "../Post/actions";

export const loadingFeed = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case GET_FEED_IN_PROGRESS: {
      return true;
    }
    case GET_FEED_FAILURE: {
      return false;
    }
    case GET_FEED_SUCCESS: {
      return false;
    }
    default:
      return state;
  }
};

export const feed = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_POST: {
      const { post } = payload;

      return [post, ...state];
    }
    case UPDATE_POST: {
      const { post } = payload;
      return state.map((statePost) => {
        if (statePost._id === post._id) {
          return post;
        }
        return statePost;
      });
    }
    case REMOVE_POST: {
      const { postId } = payload;
      return state.filter((post) => post._id !== postId);
    }
    case UPDATE_FEED: {
      const { feed } = payload;
      return feed;
    }
    case LOGOUT: {
      return [];
    }
    default:
      return state;
  }
};
