import { ADD_COMMENT, GET_COMMENTS } from "../constants/action-types";

const initialState = {
  comments: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_COMMENT) {
    return Object.assign({}, state, {
      comments: state.comments.concat(action.payload)
    });
  }

  if (action.type === GET_COMMENTS) {
    console.log("This is action", action.payload);
    return { comments: action.payload };
  }
  return state;
}

export default rootReducer;
