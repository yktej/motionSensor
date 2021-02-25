import { put, takeLatest, call } from "redux-saga/effects";
import { MonthlyReadingActionTypes } from "./MotionSensor.actionTypes";
import api from "../../api.json";
import endpoint from "../../apiUtil";

export function* getSensorReadings(req) {
  try {
    let res = null;

      res = yield call(endpoint.get, api.getSensorReadings);
    if (res.data.success) {
       //start -  fro monthly apex chart
       
      let categories = ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'];
      let series = [{
        name: 'ON',
      //  data: [44, 56, 41, 67, 22, 43,30,22,29,20]
        data: [0,0,0,0,0,0,0,0,0,0,0,0]
      }, {
        name: 'OFF',
       // data: [13, 23, 20, 8, 13, 27,37,29,40,40]
        data: [0,0,0,0,0,0,0,0,0,0,0,0]
      }];

      let monthlyStatus =  res.data.monthlyStatus;

      for(let status in monthlyStatus){
        let index = categories.indexOf(status);
        series[0]['data'][index] = monthlyStatus[status]['on'];
        series[1]['data'][index] = monthlyStatus[status]['off'];
      }
       //end    
        yield put({ type: MonthlyReadingActionTypes.GET_MONTHLY_READING_SUCCEEDED, 
          //readings: res.data.readings 
          readings:{
            ...res.data,
            series,
          } 
        });
      
    } else {
      yield put({ type: MonthlyReadingActionTypes.GET_MONTHLY_READING_FAILED});
    }
  } catch (err) {
    console.log(err);
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
          data:res.data.data,
          currentMonthActive:res.data.currentMonthActive,
          currentMonthInActive:res.data.currentMonthInActive,
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


