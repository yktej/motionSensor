import React, { useState ,useEffect} from "react";
import "./notification.css";
import "react-calendar/dist/Calendar.css";

import Calendar from "react-calendar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import ApexChart from './ApexChart.component';
import MotionSensorTable from "./MotionSensorTable.component";

// import SearchIcon from '@material-ui/icons/Search';
// import Select from 'react-select';

// const Notifications = (props: IProps) => {

type IProps = {
  getMonthlyReadings : () => void;
  readings:any;
}

const MotionSensor = (props: IProps) => {
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  useEffect(() => {
    props.getMonthlyReadings()

  });
  
  const onChange = (date) => {
    setDate(date);
  };
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const [rowData, setRowData] = useState([
    {
      Date: "02.02.2020",
      Time: "2:20PM",
      Mode: "Active",
      Time_of_the_Mode: " 2:20PM - 2:30PM",
    },
    {
      Date: "02.02.2020",
      Time: "2:20PM",
      Mode: "Active",
      Time_of_the_Mode: " 2:20PM - 2:30PM",
    },
    {
      Date: "02.02.2020",
      Time: "2:20PM",
      Mode: "Active",
      Time_of_the_Mode: " 2:20PM - 2:30PM",
    },
    {
      Date: "02.02.2020",
      Time: "2:20PM",
      Mode: "Active",
      Time_of_the_Mode: " 2:20PM - 2:30PM",
    },
    {
      Date: "02.02.2020",
      Time: "2:20PM",
      Mode: "Active",
      Time_of_the_Mode: " 2:20PM - 2:30PM",
    },
    {
      Date: "02.02.2020",
      Time: "2:20PM",
      Mode: "Active",
      Time_of_the_Mode: " 2:20PM - 2:30PM",
    },
  ]);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };
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
            {" "}
            <span>&gt;</span> 810 Active Mode
          </p>
        </div>
        <div className="data_second_box">
          <h2>Monthly INActive</h2>
          <p> &gt; 810 Active Mode</p>
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
          <Calendar onChange={onChange} value={date} />
          {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)} /> */}
        </div>
        <div className="chartjs">
          <p>
            <ApexChart  />
          </p>
        </div>
      </div>
      <div className="radio_buttons">
        <div className="radio_group">
          <label className="label_space">
            <input type="radio" value="none" name="none" />
            None
            <span></span>
          </label>
          <label className="label_space">
            <input type="radio" value="active" name="none" />
            Active
            <span></span>
          </label>
          <label className="label_space">
            <input type="radio" value="active" name="none" />
            Inactive
            <span></span>
          </label>
        </div>
      </div>
      <div>
        
      </div>
      <div className="table">
        <div className="ag-theme-alpine">
         
        {/* <MotionSensorTable /> */}
        {/* <AgGridReact
                onGridReady={onGridReady}
                rowData={rowData}>
                  
                <AgGridColumn field=" Date"></AgGridColumn>
                <AgGridColumn field="Time"></AgGridColumn>
                <AgGridColumn field="Mode"></AgGridColumn>
                <AgGridColumn field="Time_of_the_Mode"></AgGridColumn>
              
            </AgGridReact>
             */}
        </div>
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
