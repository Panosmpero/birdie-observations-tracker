import * as types from "./observationsTypes";

const observationsRequest = (settings) => {
  console.log("actions", settings);
  return {
    type: types.OBSERVATIONS_LIST_REQUEST,
    settings
  };
};

export { observationsRequest };
