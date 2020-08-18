import * as types from "../actions/observationsTypes";
import initialState from "../initialState";

const observationsReducer = (state = initialState.observations, action) => {
  switch (action.type) {
    case types.OBSERVATIONS_LIST_SUCCESS:
      console.log( action, "reducer");
      return { ...state, payload: action.payload };
    case types.OBSERVATIONS_LIST_FAILURE:
      console.log("error reducer")
      return { ...state, error: action.error }
    default:
      return state;
  }
};
export { observationsReducer };
