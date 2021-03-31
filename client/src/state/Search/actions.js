export const SEARCH_IN_PROGRESS = "SEARCH_IN_PROGRESS";
export const searchInProgress = () => ({
  type: SEARCH_IN_PROGRESS,
});

export const SEARCH_FAILURE = "SEARCH_FAILURE";
export const searchFailure = (error = "Error") => ({
  type: SEARCH_FAILURE,
  payload: { error },
});

export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const searchSuccess = (results) => ({
  type: SEARCH_SUCCESS,
  payload: { results },
});
