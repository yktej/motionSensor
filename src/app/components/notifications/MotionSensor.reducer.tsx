import {
  MonthlyReadingActionTypes,
} from "./MotionSensor.actionTypes";

export const motionSensor_reducer = (
  state: any = {
    readings:{data:[]}
  },
  action: any
) => {
  switch (action.type) {
    case MonthlyReadingActionTypes.GET_MONTHLY_READING:
      return {
         ...state,
        loading: true,
      };
      case MonthlyReadingActionTypes.GET_MONTHLY_READING_SUCCEEDED:
        return {
           ...state,
           loading: false,
          readings:action.readings,
        };
  
      case MonthlyReadingActionTypes.GET_MONTHLY_READING_FAILED: {
        return {
           ...state,
           loading: false,
        };
      }
      case MonthlyReadingActionTypes.FILTER_SENSOR_LOGS_SUCCEEDED:
        return {
           ...state,
           loading: false,
           readings:{
             ...state.readings,
             data:action.data,
             currentMonthActive:action.currentMonthActive,
             currentMonthInActive:action.currentMonthInActive,
           }
        };
  
      case MonthlyReadingActionTypes.FILTER_SENSOR_LOGS_FAILED: {
        return {
           ...state,
           loading: false,
        };
      }
    default:
      return state;
  }
};


