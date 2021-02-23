import { put, takeLatest, call } from "redux-saga/effects";
import { MonthlyReadingActionTypes } from "./MotionSensor.actionTypes";
import api from "../../api.json";
import endpoint from "../../apiUtil";

export function* getSensorReadings(req) {
  try {
    let res = null;

      res = yield call(endpoint.get, api.getSensorReadings);
    if (res.data.success) {
           
        yield put({ type: MonthlyReadingActionTypes.GET_MONTHLY_READING_SUCCEEDED, readings: res.data.readings });
      
    } else {
      yield put({ type: MonthlyReadingActionTypes.GET_MONTHLY_READING_FAILED});
    }
  } catch (err) {
    yield put({
      type: MonthlyReadingActionTypes.GET_MONTHLY_READING_FAILED,
    });
  }
}


export function* getSensorReadingsWatcher() {
  yield takeLatest(MonthlyReadingActionTypes.GET_MONTHLY_READING, getSensorReadings);
}


