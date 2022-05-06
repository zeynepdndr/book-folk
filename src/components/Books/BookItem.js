import React, { useState } from "react";
import BookDate from "./BookDate";
import "./BookItem.css";
import Card from "../UI/Card/Card";
import { firestoreTimestampToDate } from "../../utils/firestoreTimestampToDate";

const BookItem = (props) => {
  const [date, setDate] = useState(
    firestoreTimestampToDate(props.item.startDate)
  );
  const [isEditing, setIsEditing] = useState(false);

  const editBookHandler = () => {
    // props.onEdit(props.item);
  };
  const deleteBookHandler = () => {
    props.onDelete(props.item.id);
  };

  return (
    <Card className="book-item">
      <BookDate date={date} />
      <div className="book-item__description">
        <h2>{props.item.name}</h2>
        <div className="book-item__page">{props.item.page}</div>
        <button onClick={editBookHandler}>EDIT</button>
        <button onClick={deleteBookHandler}>DELETE</button>
      </div>
    </Card>
  );
};

export default BookItem;
