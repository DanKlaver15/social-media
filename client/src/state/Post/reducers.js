import {
  ADD_POST,
  REMOVE_POST,
  UPDATE_POST,
  POST_IN_PROGRESS,
  POST_SUCCESS,
  POST_FAILURE,
  UPDATE_FEED,
} from "./actions";

export const isPosting = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case POST_IN_PROGRESS: {
      return true;
    }
    case POST_FAILURE: {
      return false;
    }
    case POST_SUCCESS: {
      return true;
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

      return state
        .map((statePost) => {
          return statePost;
        })
        .push(post);
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
    default:
      return state;
  }
};
