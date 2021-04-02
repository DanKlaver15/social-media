import { POST_IN_PROGRESS, POST_SUCCESS, POST_FAILURE } from "./actions";

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
