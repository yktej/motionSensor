import { connect } from "react-redux";
import { Dispatch } from "redux";
import MotionSensor from "./MotionSensor.component";
import { getMonthlyReadings } from "./MotionSensor.action";

export const mapStateToProps = (state: any) => {
  return {
    //...state,
    readings: state.readings,
  };
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getMonthlyReadings: () => dispatch(getMonthlyReadings()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MotionSensor);
