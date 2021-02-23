import { connect } from "react-redux";
import { Dispatch } from "redux";
import MotionSensor from "./MotionSensor.component";
import { getMonthlyReadings ,filterSensorLogs} from "./MotionSensor.action";

export const mapStateToProps = (state: any) => {
  return {
    //...state,
  //  readings: state.motionSensorReducer.readings,
    data: state.motionSensorReducer.readings.data,
    currentMonthActive: state.motionSensorReducer.readings.currentMonthActive,
    currentMonthInActive: state.motionSensorReducer.readings.currentMonthInActive,
    monthlyStatus: state.motionSensorReducer.readings.monthlyStatus,
    
    
  };
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getMonthlyReadings: () => dispatch(getMonthlyReadings()),
     filterSensorLogs : (obj:any) => dispatch(filterSensorLogs(obj)),
};
};

export default connect(mapStateToProps, mapDispatchToProps)(MotionSensor);
