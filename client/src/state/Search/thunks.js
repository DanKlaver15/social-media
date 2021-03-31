import axios from "axios";
import { authHeader } from "../../helpers/authHeader";

import { searchInProgress, searchSuccess, searchFailure } from "./actions";

export const searchPeopleRequest = (keywords) => async (dispatch, getState) => {
  dispatch(searchInProgress());

  try {
    const response = await axios.get(
      `http://localhost:5000/api/search/people/${keywords}`
    );

    const data = await response.data;

    dispatch(searchSuccess(data));
  } catch (err) {
    console.log(err);
    dispatch(searchFailure(err.response.data.message));
  }
};
