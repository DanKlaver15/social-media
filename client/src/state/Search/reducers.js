import { SEARCH_IN_PROGRESS, SEARCH_SUCCESS, SEARCH_FAILURE } from "./actions";
import { UPDATE_FRIEND_STATUS } from "../FriendRequest/actions";
import { LOGOUT } from "../User/actions";

export const searching = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case SEARCH_IN_PROGRESS: {
      return true;
    }
    case SEARCH_FAILURE: {
      return true;
    }
    case SEARCH_SUCCESS: {
      return false;
    }
    default:
      return state;
  }
};

export const searchResults = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_SUCCESS: {
      const { results } = payload;
      return results;
    }
    case UPDATE_FRIEND_STATUS: {
      const { status, friendId } = payload;
      return state.map((friend) => {
        if (friend._id === friendId) {
          return { ...friend, friends: status };
        }
        return friend;
      });
    }
    case LOGOUT: {
      return [];
    }
    default:
      return state;
  }
};

const searchReducers = {
  searching,
  searchResults,
};

export default searchReducers;
