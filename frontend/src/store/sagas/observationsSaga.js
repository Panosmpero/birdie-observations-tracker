import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import * as types from "../actions/observationsTypes";
import { api, serialize } from "../../util";

const getAsyncObservations = function* ({settings}) {
  try {
    settings = serialize(settings)
    const apiURL = settings ? `${api.observations}/settings?${settings}` : api.observations
    const { data } = yield axios.get(apiURL);
    console.log("sagas", data);
    yield put({ type: types.OBSERVATIONS_LIST_SUCCESS, payload: data });
  } catch (error) {
    console.log("sagas", error);
    yield put({ type: types.OBSERVATIONS_LIST_FAILURE, error });
  }
};

export function* getObservations() {
  yield takeLatest(types.OBSERVATIONS_LIST_REQUEST, getAsyncObservations);
}
