import {
  AUTH_USER_IN_PROGRESS,
  AUTH_USER_IN_FAILURE,
  AUTH_USER_IN_SUCCESS,
  UPDATE_USER,
  DELETE_USER,
} from "./actions";

export const authUser = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case AUTH_USER_IN_PROGRESS: {
      return false;
    }
    case AUTH_USER_IN_FAILURE: {
      return false;
    }
    case AUTH_USER_IN_SUCCESS: {
      return true;
    }
    default:
      return state;
  }
};

export const user = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_USER: {
      const { user } = payload;
      return user;
    }
    case DELETE_USER: {
      return state;
    }
    default:
      return state;
  }
};
