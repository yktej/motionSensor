import {
  MonthlyReadingActionTypes,
} from "./MotionSensor.actionTypes";

export const motionSensor_reducer = (
  state: any = {},
  action: any
) => {
  switch (action.type) {
    case MonthlyReadingActionTypes.GET_MONTHLY_READING:
      return {
        // ...state,
        loading: true,
      };
    case MonthlyReadingActionTypes.GET_MONTHLY_READING_SUCCEEDED:
      return {
        loading: false,
        readings:action.readings,
      };

    case MonthlyReadingActionTypes.GET_MONTHLY_READING_FAILED: {
      return {
        loading: false,
      };
    }
    default:
      return state;
  }
};


