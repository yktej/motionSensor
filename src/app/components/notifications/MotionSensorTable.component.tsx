import React, { useState ,useEffect} from "react";
import ReactTable from 'react-table'


// import SearchIcon from '@material-ui/icons/Search';
// import Select from 'react-select';

// const Notifications = (props: IProps) => {

type IProps = {
 /* getMonthlyReadings : () => void;
  readings:any;*/
}

const data = [{
  date: '02.02.2020',
  time: "2.20PM",
  mode: 'Active',
  timeOfMode: '2.20PM-2.30PM',
},{
  date: '02.02.2020',
  time: "2.30PM",
  mode: 'InActive',
  timeOfMode: '2.40PM-2.50PM',
}]

const columns = [{
  Header: 'Date',
  accessor: 'date' // String-based value accessors!
}, {
  Header: 'Time',
  accessor: 'time',
 // Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
},
{
  Header: 'Mode',
  accessor: 'mode' // String-based value accessors!
}, {
  Header: 'Time of the mode',
  accessor: 'timeOfMode',
}]

const MotionSensorTable = (props: IProps) => {
  /*const [date, setDate] = useState(new Date());

  useEffect(() => {
    props.getMonthlyReadings()

  });
  */
 
 
  return (
    <ReactTable
    data={data}
    columns={columns}    
    getTheadThProps={() => {
      return {
        className: "tableHeader",
      };
    }}
    getTrProps={({}, rowInfo: any) => {
      if (
        rowInfo &&
        rowInfo.original &&
        (rowInfo.original.isReconcile === true ||
          rowInfo.original.isReconcile === false)
      ) {
        return {
          className: rowInfo.original.isReconcile
            ? "reconsole"
            : "notReconsole",
        };
      }
      return {
        className:
          rowInfo &&
          rowInfo.original &&
          rowInfo.original.isActive === false &&
          "activeClick",
      };
    }}
  />
  );
};

export default MotionSensorTable;
