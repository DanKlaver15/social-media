import {
  SEND_FRIEND_REQUEST_IN_PROGRESS,
  SEND_FRIEND_REQUEST_SUCCESS,
  SEND_FRIEND_REQUEST_FAILURE,
  FRIEND_REQUESTS_IN_PROGRESS,
  FRIEND_REQUESTS_SUCCESS,
  FRIEND_REQUESTS_FAILURE,
  UPDATE_ALL_FRIEND_REQUESTS,
  ACCEPT_FRIEND_REQUEST_IN_PROGRESS,
  ACCEPT_FRIEND_REQUEST_SUCCESS,
  ACCEPT_FRIEND_REQUEST_FAILURE,
  DECLINE_FRIEND_REQUEST_IN_PROGRESS,
  DECLINE_FRIEND_REQUEST_SUCCESS,
  DECLINE_FRIEND_REQUEST_FAILURE,
  ACCEPT_FRIEND,
  DECLINE_FRIEND,
} from "./actions";

export const sendingFriendRequest = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case SEND_FRIEND_REQUEST_IN_PROGRESS: {
      return true;
    }
    case SEND_FRIEND_REQUEST_FAILURE: {
      return false;
    }
    case SEND_FRIEND_REQUEST_SUCCESS: {
      return false;
    }
    default:
      return state;
  }
};

export const loadingFriendRequests = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case FRIEND_REQUESTS_IN_PROGRESS: {
      return true;
    }
    case FRIEND_REQUESTS_SUCCESS: {
      return false;
    }
    case FRIEND_REQUESTS_FAILURE: {
      return false;
    }
    default:
      return state;
  }
};

export const friendRequests = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_ALL_FRIEND_REQUESTS: {
      const { friendRequests } = payload;
      return friendRequests;
    }
    case ACCEPT_FRIEND: {
      const { friendRequestId } = payload;
      return state.map((friendRequest) => {
        if (friendRequest._id === friendRequestId) {
          return { ...friendRequest, accepted: true };
        }
        return friendRequests;
      });
    }
    case DECLINE_FRIEND: {
      const { friendRequestId } = payload;
      return state.filter(
        (friendRequest) => friendRequest._id === friendRequestId
      );
    }
    default:
      return state;
  }
};

export const acceptingFriendRequest = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case ACCEPT_FRIEND_REQUEST_IN_PROGRESS: {
      return true;
    }
    case ACCEPT_FRIEND_REQUEST_SUCCESS: {
      return false;
    }
    case ACCEPT_FRIEND_REQUEST_FAILURE: {
      return false;
    }
    default:
      return state;
  }
};

export const decliningFriendRequest = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case DECLINE_FRIEND_REQUEST_IN_PROGRESS: {
      return true;
    }
    case DECLINE_FRIEND_REQUEST_SUCCESS: {
      return false;
    }
    case DECLINE_FRIEND_REQUEST_FAILURE: {
      return false;
    }
    default:
      return state;
  }
};