export const FRIENDS_IN_PROGRESS = "FRIENDS_IN_PROGRESS";
export const friendsInProgress = () => ({
  type: FRIENDS_IN_PROGRESS,
});

export const FRIENDS_IN_FAILURE = "FRIENDS_IN_FAILURE";
export const friendsInFailure = () => ({
  type: FRIENDS_IN_FAILURE,
});

export const FRIENDS_IN_SUCCESS = "FRIENDS_IN_SUCCESS";
export const friendsInSuccess = () => ({
  type: FRIENDS_IN_SUCCESS,
});

export const UPDATE_FRIENDS = "UPDATE_FRIENDS";
export const updateFriends = (friends) => ({
  type: UPDATE_FRIENDS,
  payload: { friends },
});

export const ADD_FRIEND = "ADD_FRIEND";
export const addFriend = (friend) => ({
  type: ADD_FRIEND,
  payload: { friend },
});

export const DELETE_FRIEND = "DELETE_FRIEND";
export const deleteFriend = (friendId) => ({
  type: DELETE_FRIEND,
  payload: { friendId },
});
