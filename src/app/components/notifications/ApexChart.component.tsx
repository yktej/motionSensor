import React, { useEffect, useState } from "react";
import ReactApexChart from 'react-apexcharts'
import BarChart from './BarChart'




let options  =  {
  chart: {
    type: 'bar',
    height: 350,
    
    stacked: true,
    toolbar: {
      show: true
    },
    zoom: {
      enabled: true
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  plotOptions: {
    bar: {
      borderRadius:'40%',
      horizontal: false,
      columnWidth: '20%',
      barHeight: '100%',
    },
  },
  xaxis: {
    categories: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'],
  },

  legend: {
    position: 'right',
    offsetY: 40
  },
  title: {
    text: 'Monthly Status',
    offsetX: 20
  },
  fill: {
    opacity: 1,
   
  },

  colors: ['#FBBC05','#ECD79A'],
}



interface IProps {
  series:any;
}

const ApexChart = (props: IProps) => {

 /*     
let [series,setSeries] = useState([{
  name: 'ON',
//  data: [44, 56, 41, 67, 22, 43,30,22,29,20]
  data: [0,0,0,0,0,0,0,0,0,0,0,0]
}, {
  name: 'OFF',
 // data: [13, 23, 20, 8, 13, 27,37,29,40,40]
  data: [0,0,0,0,0,0,0,0,0,0,0,0]
}]);

*/
    
    return (     

<div id="chart">

  { /*
    <ReactApexChart options={options} series={series} type="bar" height={350} width='600px'/>
  */ }

{props.series && props.series.length > 0 &&
 <BarChart options={options} series={props.series} ></BarChart>
}
</div>
)

}


export default ApexChart;
