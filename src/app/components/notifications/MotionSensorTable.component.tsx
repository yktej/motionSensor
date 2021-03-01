import React, { useState ,useEffect} from "react";
import ReactTable from 'react-table'
import moment from 'moment';

  

// const Notifications = (props: IProps) => {

type IProps = {
 /* getMonthlyReadings : () => void;
  readings:any;*/
  readings:any;
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
      id: 1,
      Header: 'Date',
   accessor: (d: any) => { return `${moment(d.date).format("DD.MM")}.2021`},
  // accessor: (d: any) => d.date,
}, {
      id: 2,
      Header: 'Time',
  accessor: 'time',
 // Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
},
{
      id: 3,
      Header: 'Mode',
  Cell: props => {  
    let color,className='';
    if(props.original.mode=='Active'){
      color='green';
      className='green';
    }else{
      color='red';
      className='red';
    }
    return (
  <button style={{backgroundColor:color}} className={className} >{props.original.mode}</button> 
    )
  } // Custom cell components!
  //accessor: 'mode' // String-based value accessors!
}, {
      id: 4,
      Header: 'Time of the mode',
  accessor: 'totalOnTime',
}]

const MotionSensorTable = (props: IProps) => {
  /*const [date, setDate] = useState(new Date());

  useEffect(() => {
    props.getMonthlyReadings()

  });
  */
 
 
  return (
    <ReactTable
    data={props.readings}
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
