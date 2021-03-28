import {
  LOGIN_IN_PROGRESS,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  UPDATE_USER,
  DELETE_USER,
  ADD_LOGIN_ERROR,
  REMOVE_LOGIN_ERROR,
  LOGOUT,
  REGISTER_IN_PROGRESS,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "./actions";

export const loggedIn = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case LOGIN_IN_PROGRESS: {
      return false;
    }
    case LOGIN_FAILURE: {
      return false;
    }
    case LOGIN_SUCCESS: {
      return true;
    }
    case LOGOUT: {
      return false;
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
    case LOGIN_FAILURE: {
      return payload.error;
    }
    default:
      return state;
  }
};

export const user = (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_USER: {
      const { user } = payload;
      return user;
    }
    case DELETE_USER: {
      return state;
    }
    case LOGIN_SUCCESS: {
      const { user } = payload;
      return user;
    }
    default:
      return state;
  }
};

export const registered = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case REGISTER_IN_PROGRESS: {
      return false;
    }
    case REGISTER_FAILURE: {
      return false;
    }
    case REGISTER_SUCCESS: {
      return true;
    }
    case LOGOUT: {
      return false;
    }
    default:
      return state;
  }
};
