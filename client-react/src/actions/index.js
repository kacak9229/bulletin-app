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
      console.log("Array", response.data.data);
      dispatch(getComments(response.data.data));
    } catch (err) {
      console.log(err);
    }
  };
}

// export function anAction() {
//     const resource = '/resource';

//     return async (dispatch) => {
//       try {
//         const result = await axios.get(resource);

//         dispatch({
//           type: 'AN_ACTION',
//           ...result.data
//         });
//       } catch (error) {
//         console.error(`Error fetching ${resource}`, error);
//         dispatch({
//           type: 'AN_ACTION' // or, better, 'FAILED_ACTION' or something like that
//         });
//       }
//     };
//   }
