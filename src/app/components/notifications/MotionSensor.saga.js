import { put, takeLatest, call } from "redux-saga/effects";
import { MonthlyReadingActionTypes } from "./MotionSensor.actionTypes";
import api from "../../api.json";
import endpoint from "../../apiUtil";

export function* getSensorReadings(req) {
  try {
    let res = null;

      res = yield call(endpoint.get, api.getSensorReadings);
    if (res.data.success) {
           
        yield put({ type: MonthlyReadingActionTypes.GET_MONTHLY_READING_SUCCEEDED, 
          //readings: res.data.readings 
          readings:{...res.data} 
        });
      
    } else {
      yield put({ type: MonthlyReadingActionTypes.GET_MONTHLY_READING_FAILED});
    }
  } catch (err) {
    yield put({
      type: MonthlyReadingActionTypes.GET_MONTHLY_READING_FAILED,
    });
  }
}

export function* filterSensorReadings(req) {
  try {
    let res = null;

      res = yield call(endpoint.post, api.filterSensorReadings,req.payload);
    if (res.data.success) {
           
        yield put({ type: MonthlyReadingActionTypes.FILTER_SENSOR_LOGS_SUCCEEDED, 
          //readings: res.data.readings 
          data:res.data.data
        });
      
    } else {
      yield put({ type: MonthlyReadingActionTypes.FILTER_SENSOR_LOGS_FAILED});
    }
  } catch (err) {
    yield put({
      type: MonthlyReadingActionTypes.FILTER_SENSOR_LOGS_FAILED,
    });
  }
}


export function* filterSensorReadingsWatcher() {
  yield takeLatest(MonthlyReadingActionTypes.FILTER_SENSOR_LOGS, filterSensorReadings);
}

export function* getSensorReadingsWatcher() {
  yield takeLatest(MonthlyReadingActionTypes.GET_MONTHLY_READING, getSensorReadings);
}


