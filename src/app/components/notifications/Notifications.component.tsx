import React, { useState } from "react";
import "./notification.css";
import "react-calendar/dist/Calendar.css";

import Calendar from "react-calendar";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
// import SearchIcon from '@material-ui/icons/Search';
// import Select from 'react-select';

// const Notifications = (props: IProps) => {

const Notifications = () => {
  const [date, setDate] = useState(new Date());

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
      <h1>Notifications</h1>
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
        </div>
        <div className="chartjs">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error ex,
            optio quos ratione, cum pariatur officia sed ad voluptas fuga
            suscipit saepe tenetur. Voluptates ducimus amet impedit atque culpa
            laborum. Cum corrupti enim unde quibusdam, adipisci minima
            repellendus doloremque recusandae aliquid vel est beatae velit quo a
            praesentium officiis deleniti magnam quis ea laboriosam rerum ipsa,
            iure amet aperiam. Fugit. Magnam libero reiciendis aut fugit
            praesentium tenetur reprehenderit atque modi magni laudantium facere
            itaque culpa ducimus assumenda soluta, cum sint pariatur velit ipsum
            minima, et explicabo voluptatem nam. Voluptatum, praesentium. Id
            veniam, facere nulla harum aliquid dolorem pariatur recr, sit amet
            consectetur adipisicing elit. Error ex, optio quos ratione, cum
            pariatur officia sed ad voluptas fuga suscipit saepe tenetur.
            Voluptates ducimus amet impedit atque culpa laborum. Cum corrupti
            enim unde quibusdam, adipisci minima repellendus doloremque
            recusandae aliquid vel est beatae velit quo a praesentium officiis
            deleniti magnam quis ea laboriosam rerum ipsa, iure amet aperiam.
            Fugit. Magnam libero reiciendis s tempore dolorum,nte et sed
            perferendis soluta ipsum aperiam consequuntur. Cum, id natus! Aut
            sint, quibusdam dolore sapiente magni veritatis molestiae minus?
            Tempore,{" "}
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
      <div className="table">
        <div className="ag-theme-alpine">
          <AgGridReact onGridReady={onGridReady} rowData={rowData}>
            <AgGridColumn field="Date"></AgGridColumn>
            <AgGridColumn field="Time"></AgGridColumn>
            <AgGridColumn field="Mode"></AgGridColumn>
            <AgGridColumn field="Time_of_the_Mode"></AgGridColumn>
          </AgGridReact>
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

export default Notifications;
