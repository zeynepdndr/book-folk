import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((item) => parseInt(item.value));
  const maxValue = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((item) => (
        <ChartBar
          key={item.label}
          maxValue={maxValue}
          value={item.value}
          label={item.label}
        />
      ))}
    </div>
  );
};

export default Chart;
