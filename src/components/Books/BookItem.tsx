import React, { useContext, useState } from "react";
import BookDate from "./BookDate";
import Card from "../UI/Card/Card";
import { firestoreTimestampToDate } from "../../utils/firestoreTimestampToDate";
import FavoritesContext from "../../store/favorites-context";
import styles from "./BookItem.module.css";
import noCover from "../../assets/no-cover.jpg";

const BookItem = (props) => {
  const favoritesCtx = useContext(FavoritesContext);

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

  const addToFavoritesHandler = () => {
    favoritesCtx.addItem({ id: props.item.id, bookName: props.item.name });
  };

  const removeFromFavoritesHandler = () => {
    favoritesCtx.removeItem(props.item.id);
  };

  return (
    <Card className={styles["book-item"]}>
      <img
        src={noCover}
        alt={props.item.name}
        className={styles["book-item__cover"]}
      />
      <div className={styles["book-item__description"]}>
        <h2>{props.item.name}</h2>
        <div className={styles["book-item__page"]}>{props.item.page}</div>
        <div className={styles["book-item__operation"]}>
          <button onClick={editBookHandler}>EDIT</button>
          <button onClick={deleteBookHandler}>DELETE</button>
          <button onClick={addToFavoritesHandler}>FAVORITE</button>
        </div>
      </div>
      <BookDate date={date} />
    </Card>
  );
};

export default BookItem;
