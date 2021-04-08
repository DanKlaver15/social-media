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
  UPDATE_AVATAR_PROGRESS,
  UPDATE_AVATAR_FAILURE,
  UPDATE_AVATAR_SUCCESS,
  UPDATE_PERSON,
  UPDATE_USER_IN_PROGRESS,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
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
    case LOGOUT: {
      return {};
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

export const updateAvatar = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case UPDATE_AVATAR_PROGRESS: {
      return true;
    }
    case UPDATE_AVATAR_FAILURE: {
      return false;
    }
    case UPDATE_AVATAR_SUCCESS: {
      return false;
    }
    default:
      return state;
  }
};

export const person = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_PERSON: {
      const { person } = payload;
      return person;
    }
    case LOGOUT: {
      return {};
    }
    default:
      return state;
  }
};

export const updatingUser = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case UPDATE_USER_IN_PROGRESS: {
      return true;
    }
    case UPDATE_USER_SUCCESS: {
      return false;
    }
    case UPDATE_USER_FAILURE: {
      return false;
    }
    default:
      return state;
  }
};

const userReducers = {
  loggedIn,
  loginError,
  user,
  registered,
  updateAvatar,
  person,
  updatingUser,
};

export default userReducers;
