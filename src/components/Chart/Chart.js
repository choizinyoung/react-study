import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPointValues  = props.dataPoints && props.dataPoints.map(data=>data.value);
    const totalMax = Math.max(...dataPointValues);

  return (
    <div className="chart">
     
      {props.dataPoints &&
        props.dataPoints.map((dataPoint) => {
          return (
            <ChartBar
              key={dataPoint.label}
              label={dataPoint.label}
              value={dataPoint.value}
              maxValue={totalMax}
            />
          );
        })}
    </div>
  );
};
export default Chart;
