import React, { useEffect } from "react";
import ReactApexChart from 'react-apexcharts'


interface IProps {
  monthlyStatus :any;
}

let series =  [{
  name: 'ON',
//  data: [44, 56, 41, 67, 22, 43,30,22,29,20]
  data: [0,0,0,0,0,0,0,0,0,0,0,0]
}, {
  name: 'OFF',
 // data: [13, 23, 20, 8, 13, 27,37,29,40,40]
  data: [0,0,0,0,0,0,0,0,0,0,0,0]
}]

   
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
      borderRadius: 8,
      horizontal: false,
    },
  },
  xaxis: {
    categories: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'],
  },

  legend: {
    position: 'right',
    offsetY: 40
  },
  fill: {
    opacity: 1
  },
  colors: ['#FF7F00','blue'],
}

const ApexChart = (props: IProps) => {

 


useEffect(() => {

  for(let status in props.monthlyStatus){
    let index = options.xaxis.categories.indexOf(status);
    series[0]['data'][index] = props.monthlyStatus[status]['on'];
    series[1]['data'][index] = props.monthlyStatus[status]['off'];
  }

},[props.monthlyStatus]);
    
    return (     

<div id="chart">
<ReactApexChart options={options} series={series} type="bar" height={350} width='600px'/>
</div>
)

}


export default ApexChart;
