import axios from "axios";
import { authHeader, userId, getError } from "../../helpers/authHeader";

import {
  getFeedInProgress,
  getFeedSuccess,
  getFeedFailure,
  updateFeed,
} from "./actions";

export const getFeedRequest = () => async (dispatch, getState) => {
  dispatch(getFeedInProgress());

  try {
    const response = await axios.get(
      `http://localhost:5000/api/users/${userId()}/feed`,
      { headers: authHeader() }
    );

    const feed = await response.data;

    dispatch(getFeedSuccess());
    dispatch(updateFeed(feed));
  } catch (err) {
    dispatch(getFeedFailure(getError(err)));
    console.log(err);
  }
};
