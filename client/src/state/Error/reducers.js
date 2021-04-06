import { UPDATE_AVATAR_FAILURE, UPDATE_AVATAR_SUCCESS } from "../User/actions";
import { GET_FEED_FAILURE, GET_FEED_SUCCESS } from "../Feed/actions";
import {
  ACCEPT_FRIEND_REQUEST_FAILURE,
  ACCEPT_FRIEND_REQUEST_SUCCESS,
} from "../FriendRequest/actions";

export const error = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_AVATAR_FAILURE: {
      const { error } = payload;
      state.updateAvatar = { error: true, message: error };
      return state;
    }
    case UPDATE_AVATAR_SUCCESS: {
      state.updateAvatar = { error: false, message: "" };
      return state;
    }
    case GET_FEED_FAILURE: {
      const { error } = payload;
      state.getFeed = { error: true, message: error };
      return state;
    }
    case GET_FEED_SUCCESS: {
      state.getFeed = { error: false, message: "" };
      return state;
    }
    case ACCEPT_FRIEND_REQUEST_SUCCESS: {
      state.acceptFriend = { error: false, message: "" };
      return state;
    }
    case ACCEPT_FRIEND_REQUEST_FAILURE: {
      const { error } = payload;
      state.acceptFriend = { error: true, message: error };
      return state;
    }
    default:
      return state;
  }
};
