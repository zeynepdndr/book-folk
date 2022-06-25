import Chart from "../Charts/Chart";
import { firestoreTimestampToDate } from "../../utils/firestoreTimestampToDate";

const BooksChart = (props) => {
  const chartData = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  props.items.forEach((book) => {
    let b = firestoreTimestampToDate(book.startDate);
    let a = b.getMonth();
    chartData[a].value += book.page;
  });

  return <Chart dataPoints={chartData} />;
};

export default BooksChart;
