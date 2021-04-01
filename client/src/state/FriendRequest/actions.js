export const FRIEND_REQUEST_IN_PROGRESS = "FRIEND_REQUEST_IN_PROGRESS";
export const friendRequestInProgress = () => ({
  type: FRIEND_REQUEST_IN_PROGRESS,
});

export const FRIEND_REQUEST_FAILURE = "FRIEND_REQUEST_FAILURE";
export const friendsRequestFailure = () => ({
  type: FRIEND_REQUEST_FAILURE,
});

export const FRIEND_REQUEST_SUCCESS = "FRIEND_REQUEST_SUCCESS";
export const friendRequestSuccess = () => ({
  type: FRIEND_REQUEST_SUCCESS,
});

export const UPDATE_FRIEND_STATUS = "UPDATE_FRIEND_STATUS";
export const updateFriendsStatus = (friendId, status) => ({
  type: UPDATE_FRIEND_STATUS,
  payload: { friendId, status },
});
