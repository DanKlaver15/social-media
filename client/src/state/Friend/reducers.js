import {
  UPDATE_FRIENDS,
  FRIENDS_IN_FAILURE,
  FRIENDS_IN_PROGRESS,
  FRIENDS_IN_SUCCESS,
  ADD_FRIEND,
} from "./actions";
import { LOGOUT } from "../User/actions";

export const friendsLoading = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case FRIENDS_IN_PROGRESS: {
      return true;
    }
    case FRIENDS_IN_FAILURE: {
      return false;
    }
    case FRIENDS_IN_SUCCESS: {
      return false;
    }
    default:
      return state;
  }
};

export const friends = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_FRIENDS: {
      const { friends } = payload;
      return friends;
    }
    case ADD_FRIEND: {
      const { friend } = payload;
      return [...state, friend];
    }
    case LOGOUT: {
      return [];
    }
    default:
      return state;
  }
};
