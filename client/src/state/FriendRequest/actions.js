export const SEND_FRIEND_REQUEST_IN_PROGRESS =
  "SEND_FRIEND_REQUEST_IN_PROGRESS";
export const sendFriendRequestInProgress = () => ({
  type: SEND_FRIEND_REQUEST_IN_PROGRESS,
});

export const SEND_FRIEND_REQUEST_FAILURE = "SEND_FRIEND_REQUEST_FAILURE";
export const sendFriendRequestFailure = () => ({
  type: SEND_FRIEND_REQUEST_FAILURE,
});

export const SEND_FRIEND_REQUEST_SUCCESS = "SEND_FRIEND_REQUEST_SUCCESS";
export const sendFriendRequestSuccess = (friendRequest) => ({
  type: SEND_FRIEND_REQUEST_SUCCESS,
  payload: { friendRequest },
});

export const UPDATE_FRIEND_STATUS = "UPDATE_FRIEND_STATUS";
export const updateFriendStatus = (friendId, status) => ({
  type: UPDATE_FRIEND_STATUS,
  payload: { friendId, status },
});

export const FRIEND_REQUESTS_IN_PROGRESS = "FRIEND_REQUESTS_IN_PROGRESS";
export const friendRequestsInProgress = () => ({
  type: FRIEND_REQUESTS_IN_PROGRESS,
});

export const FRIEND_REQUESTS_SUCCESS = "FRIEND_REQUESTS_SUCCESS";
export const friendRequestsSuccess = () => ({
  type: FRIEND_REQUESTS_SUCCESS,
});

export const FRIEND_REQUESTS_FAILURE = "FRIEND_REQUESTS_FAILURE";
export const friendRequestsFailure = () => ({
  type: FRIEND_REQUESTS_FAILURE,
});

export const UPDATE_ALL_FRIEND_REQUESTS = "UPDATE_ALL_FRIEND_REQUESTS";
export const updateAllFriendRequests = (friendRequests) => ({
  type: UPDATE_ALL_FRIEND_REQUESTS,
  payload: { friendRequests },
});

export const ACCEPT_FRIEND_REQUEST_IN_PROGRESS =
  "ACCEPT_FRIEND_REQUEST_IN_PROGRESS";
export const acceptFriendRequestInProgress = () => ({
  type: ACCEPT_FRIEND_REQUEST_IN_PROGRESS,
});

export const ACCEPT_FRIEND_REQUEST_FAILURE = "ACCEPT_FRIEND_REQUEST_FAILURE";
export const acceptFriendRequestFailure = (error) => ({
  type: ACCEPT_FRIEND_REQUEST_FAILURE,
  payload: { error },
});

export const ACCEPT_FRIEND_REQUEST_SUCCESS = "ACCEPT_FRIEND_REQUEST_SUCCESS";
export const acceptFriendRequestSuccess = () => ({
  type: ACCEPT_FRIEND_REQUEST_SUCCESS,
});

export const DECLINE_FRIEND_REQUEST_IN_PROGRESS =
  "DECLINE_FRIEND_REQUEST_IN_PROGRESS";
export const declineFriendRequestInProgress = () => ({
  type: DECLINE_FRIEND_REQUEST_IN_PROGRESS,
});

export const DECLINE_FRIEND_REQUEST_FAILURE = "DECLINE_FRIEND_REQUEST_FAILURE";
export const declineFriendRequestFailure = () => ({
  type: DECLINE_FRIEND_REQUEST_FAILURE,
});

export const DECLINE_FRIEND_REQUEST_SUCCESS = "DECLINE_FRIEND_REQUEST_SUCCESS";
export const declineFriendRequestSuccess = () => ({
  type: DECLINE_FRIEND_REQUEST_SUCCESS,
});

export const UPDATE_FRIEND_REQUEST = "UPDATE_FRIEND_REQUEST";
export const updateFriendRequest = (friendRequest) => ({
  type: UPDATE_FRIEND_REQUEST,
  payload: { friendRequest },
});

export const DECLINE_FRIEND = "DECLINE_FRIEND";
export const declineFriend = (friendRequestId) => ({
  type: DECLINE_FRIEND,
  payload: { friendRequestId },
});
