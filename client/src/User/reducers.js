import {
  AUTH_USER_IN_PROGRESS,
  AUTH_USER_IN_FAILURE,
  AUTH_USER_IN_SUCCESS,
  UPDATE_USER,
  DELETE_USER,
  ADD_LOGIN_ERROR,
  REMOVE_LOGIN_ERROR,
} from "./actions";

export const isAuthorized = (state = false, action) => {
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

export const loginError = (state = "", action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_LOGIN_ERROR: {
      return payload.error;
    }
    case REMOVE_LOGIN_ERROR: {
      return "";
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
