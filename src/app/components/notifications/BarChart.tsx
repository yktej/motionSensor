import React, { useEffect } from "react";
import ReactApexChart from 'react-apexcharts'


interface IProps {
  options :any;
  series :any;
}


const BarChart = (props: IProps) => {


    
    return (     

<div id="chart">
<ReactApexChart options={props.options} series={props.series} type="bar" height={350} width='600px'/>
</div>
)

}


export default BarChart;
