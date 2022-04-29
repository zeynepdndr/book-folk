import React, { useState } from "react";
import BookDate from "./BookDate";
import "./BookItem.css";
import Card from "../UI/Card";

function BookItem(props) {
  const [name, setName] = useState(props.item.name);
  const clickHandler = () => {
    setName("updated");
    props.onEdit(props.item);
  };

  return (
    <Card className="book-item">
      <BookDate date={props.item.startDate} />
      <div className="book-item__description">
        <h2>{props.item.name}</h2>
        <div className="book-item__page">{props.item.page}</div>
        <button onClick={clickHandler}>EDIT</button>
      </div>
    </Card>
  );
}

export default BookItem;
