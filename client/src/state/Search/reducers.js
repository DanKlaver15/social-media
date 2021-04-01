import { SEARCH_IN_PROGRESS, SEARCH_SUCCESS, SEARCH_FAILURE } from "./actions";
import { UPDATE_FRIEND_STATUS } from "../FriendRequest/actions";

export const searching = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case SEARCH_IN_PROGRESS: {
      return false;
    }
    case SEARCH_FAILURE: {
      return false;
    }
    case SEARCH_SUCCESS: {
      return true;
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

    default:
      return state;
  }
};
