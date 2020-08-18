import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import * as types from "../actions/observationsTypes";
import { api } from "../util";

const getAsyncObservations = function* () {
  try {
    const { data } = yield axios.get(api.observations);
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
