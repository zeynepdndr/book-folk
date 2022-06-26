import React from "react";
import "./BookDate.css";

const BookDate: React.FC<any> = (props) => {
  const { date } = props;

  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className="book-date">
      <div className="book-date__month">{month}</div>
      <div className="book-date__year">{year},</div>
      <div className="book-date__day">{day}</div>
    </div>
  );
};
export default BookDate;
