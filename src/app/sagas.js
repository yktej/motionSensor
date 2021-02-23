import { all } from "redux-saga/effects";

import {
  loginUserWatcher
} from "./components/login/Login.saga";

import {
  logoutUserWatcher
} from "./components/header/Header.saga";


import {
  getSensorReadingsWatcher,
  filterSensorReadingsWatcher
} from "./components/notifications/MotionSensor.saga";



export default function* rootSaga() {
  yield all([
    loginUserWatcher(),
    logoutUserWatcher(),
    getSensorReadingsWatcher(),
    filterSensorReadingsWatcher(),
  ]);
}
