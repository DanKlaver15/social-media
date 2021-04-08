import axios from "axios";
import { authHeader, userId, getError } from "../../helpers/authHeader";

import { searchInProgress, searchSuccess, searchFailure } from "./actions";

export const searchPeopleRequest = (keywords) => async (dispatch, getState) => {
  dispatch(searchInProgress());

  try {
    const response = await axios.post(
      `http://localhost:5000/api/search/people/${keywords}`,
      { userId: userId() },
      { headers: authHeader() }
    );

    const data = await response.data;

    dispatch(searchSuccess(data));
  } catch (err) {
    console.log(err);
    dispatch(searchFailure(getError(err)));
  }
};
