import React, { useContext, useState } from "react";
import BookDate from "./BookDate";
import Card from "../UI/Card/Card";
import { firestoreTimestampToDate } from "../../utils/firestoreTimestampToDate";
import FavoritesContext from "../../store/favorites-context";
import styles from "./BookItem.module.css";
import noCover from "../../assets/no-cover.jpg";

const BookItem: React.FC<any> = (props) => {
  const { item, onDelete } = props;

  const favoritesCtx = useContext(FavoritesContext);

  const [date, setDate] = useState(firestoreTimestampToDate(item.startDate));
  const [isEditing, setIsEditing] = useState(false);

  const editBookHandler = () => {
    // props.onEdit(props.item);
  };
  const deleteBookHandler = () => {
    onDelete(item.id);
  };

  const addToFavoritesHandler = () => {
    favoritesCtx.addItem({ id: item.id, bookName: item.name });
  };

  const removeFromFavoritesHandler = () => {
    favoritesCtx.removeItem(item.id);
  };

  return (
    <Card className={styles["book-item"]}>
      <img
        src={noCover}
        alt={item.name}
        className={styles["book-item__cover"]}
      />
      <div className={styles["book-item__description"]}>
        <h2>{item.name}</h2>
        <div className={styles["book-item__page"]}>{item.page}</div>
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
