import {
  MonthlyReadingActionTypes,
} from "./MotionSensor.actionTypes";

export const getMonthlyReadings = () => {
  return {
    type: MonthlyReadingActionTypes.GET_MONTHLY_READING,
  };
};

export const filterSensorLogs = (payload:any) => {
  return {
    type: MonthlyReadingActionTypes.FILTER_SENSOR_LOGS,
    payload
  };
};

