import "./BookDate.css";

const BookDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="book-date">
      <div className="book-date__month">{month}</div>
      <div className="book-date__year">{year},</div>
      <div className="book-date__day">{day}</div>
    </div>
  );
};
export default BookDate;
