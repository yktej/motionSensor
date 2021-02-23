import {
  MonthlyReadingActionTypes,
} from "./MotionSensor.actionTypes";

export const getMonthlyReadings = () => {
  return {
    type: MonthlyReadingActionTypes.GET_MONTHLY_READING,
  };
};

