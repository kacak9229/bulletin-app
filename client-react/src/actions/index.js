import routes from "../constants/api";
import { ADD_COMMENT, GET_COMMENTS } from "../constants/action-types";

export function getComments(payload) {
  return { type: GET_COMMENTS, payload };
}

export function addComment(payload) {
  return { type: ADD_COMMENT, payload };
}

export function fetchComments(paramID) {
  return async dispatch => {
    try {
      const response = await routes.getComments(paramID);
      dispatch(getComments(response.data.data));
    } catch (err) {
      console.log(err);
    }
  };
}
