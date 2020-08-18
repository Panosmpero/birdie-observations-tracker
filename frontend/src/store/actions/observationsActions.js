import * as types from "./observationsTypes";

const observationsRequest = () => {
  console.log("actions");
  return {
    type: types.OBSERVATIONS_LIST_REQUEST,
  };
};

export { observationsRequest };
