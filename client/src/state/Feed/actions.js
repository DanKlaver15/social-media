export const GET_FEED_IN_PROGRESS = "GET_FEED_IN_PROGRESS";
export const getFeedInProgress = () => ({
  type: GET_FEED_IN_PROGRESS,
});

export const GET_FEED_SUCCESS = "GET_FEED_SUCCESS";
export const getFeedSuccess = () => ({
  type: GET_FEED_SUCCESS,
});

export const GET_FEED_FAILURE = "GET_FEED_FAILURE";
export const getFeedFailure = (error) => ({
  type: GET_FEED_FAILURE,
  payload: { error },
});

export const UPDATE_FEED = "UPDATE_FEED";
export const updateFeed = (feed) => ({
  type: UPDATE_FEED,
  payload: { feed },
});
