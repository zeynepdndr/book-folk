import React, { useState } from "react";
import BookDate from "./BookDate";
import "./BookItem.css";
import Card from "../UI/Card";
import { firestoreTimestampToDate } from "../../utils/firestoreTimestampToDate";

function BookItem(props) {
  const [name, setName] = useState(props.item.name);
  const [date, setDate] = useState(
    firestoreTimestampToDate(props.item.startDate)
  );

  const clickHandler = () => {
    setName("updated");
    props.onEdit(props.item);
  };

  return (
    <Card className="book-item">
      <BookDate date={date} />
      <div className="book-item__description">
        <h2>{props.item.name}</h2>
        <div className="book-item__page">{props.item.page}</div>
        <button onClick={clickHandler}>EDIT</button>
      </div>
    </Card>
  );
}

export default BookItem;
