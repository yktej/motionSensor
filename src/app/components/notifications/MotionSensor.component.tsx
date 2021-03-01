import React, { useState ,useEffect} from "react";
import "./notification.css";
import "react-calendar/dist/Calendar.css";

import Calendar from "react-calendar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import ApexChart from './ApexChart.component';
import MotionSensorTable from "./MotionSensorTable.component";

type IProps = {
  getMonthlyReadings : () => void;
  //readings:any;
  filterSensorLogs : (obj:{mode:string,startDate:Date,endDate:Date}) => void;
  data:any;
  currentMonthActive:String;
  currentMonthInActive:String;
  monthlyStatus:any;
  series:any;
}

const MotionSensor = (props: IProps) => {

  /*useEffect(() => {
    if(props.readings.data && props.readings.data.length <= 0){
      props.getMonthlyReadings();
    }
  });*/
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  //const [endDate, setEndDate] = useState(new Date());
  const [mode, setMode] = useState('');

  useEffect(() => {
    console.log('props.data');
    console.log(props.data);
    if(props.data && props.data.length <= 0 && startDate==null){
      props.getMonthlyReadings();
    }

  },[props.data]);
  
  
  const onChange = (dates) => {
   // let dates = date.split(',');
    setStartDate(dates[0]);
    setEndDate(dates[1]);
    props.filterSensorLogs({startDate:dates[0],endDate:dates[1],mode})
  };

  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

 
const filterSensorLogsMode = (mode) => {
  setMode(mode)
  props.filterSensorLogs({startDate,endDate,mode})
}

  return (
    <div>
      <div className="top_header">
        <div className="top_header_img">
          <img className="logo2" src="/assets/images/digilogo.png" alt=""/>
        </div>
        <div className="top_header_heading">
         <p>Motion sensor Analytics</p>
        </div>
        <div className="top_header_login">
         <p>USER</p>
        </div>
      </div>

      {/* <h1>Motion Sensor</h1> */}
      <div className="top_datas">
        <div className="data_first_box">
          <h2>Monthly Active</h2>
          <p>
           
            <span>&gt;</span> {props.currentMonthActive} 
          </p>
        </div>
        <div className="data_second_box">
          <h2>Monthly INActive</h2>
          <p> &gt; {props.currentMonthInActive}</p>
        </div>
        <div className="data_third_box">
          <h2>NEW USERS</h2>
          <p> &gt; 810 Users</p>
        </div>
      </div>

      <div className="calender">
        <div className="main_calender react-calendar">
          <div className="select_and_search">
            <div className="search_box">
              <select name="" id="">
                <option value="select">Select</option>
                <option value="month">Month</option>
                <option value="year">Year</option>
              </select>
            </div>
            <div className="search_icon">
              {/* <SearchIcon className="white_icon" /> */}

              <h1>Search</h1>
            </div>
          </div>
          <Calendar 
            onChange={onChange} 
            //value={startDate} 
            selectRange
            />
          {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)} /> */}
        </div>
        <div className="chartjs">
          <p>
            <ApexChart  series={props.series}/>  
           {/* {props.monthlyStatus && 
            <ApexChart  monthlyStatus={props.monthlyStatus} /> */}
             
          </p>
        </div>
      </div>
      <div className="radio_buttons">
        <div className="radio_group">
          <label className="label_space">
            <input type="radio" value="none" name="none" onClick={() => filterSensorLogsMode('')}/>
            None
            <span></span>
          </label>
          <label className="label_space">
            <input type="radio" value="active" name="none"  onClick={() => filterSensorLogsMode('Active')}/>
            Active
            <span></span>
          </label>
          <label className="label_space">
            <input type="radio" value="active" name="none"  onClick={() => filterSensorLogsMode('InActive')}/>
            Inactive
            <span></span>
          </label>
        </div>
      </div>
      <div>
        <MotionSensorTable readings={props.data}/>
      </div>
    
      <footer>
        <div className="footer_main">
         <p>© DJ Interactive Solutions Pvt. Ltd. 2018</p>
        </div>
      </footer>
     
    </div>
  );
};

export default MotionSensor;
