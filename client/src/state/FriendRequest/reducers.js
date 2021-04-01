import {
  FRIEND_REQUEST_IN_PROGRESS,
  FRIEND_REQUEST_SUCCESS,
  FRIEND_REQUEST_FAILURE,
} from "./actions";

export const sendingFriendRequest = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case FRIEND_REQUEST_IN_PROGRESS: {
      return true;
    }
    case FRIEND_REQUEST_FAILURE: {
      return false;
    }
    case FRIEND_REQUEST_SUCCESS: {
      return false;
    }
    default:
      return state;
  }
};
