import { useContext } from "react";
import Card from "../UI/Card/Card";
import BookContext from "../../store/book-context";
import styles from "./Results.module.css";
import FavoritesContext from "../../store/favorites-context";

const Results = ({ books }) => {
  const bookCtx = useContext(BookContext);
  const favoritesCtx = useContext(FavoritesContext);

  const readListAddHandler = () => {
    bookCtx.addItem({ id: "book.id", bookName: "books.name" });
  };
  const favoritesListAddHandler = () => {
    favoritesCtx.addItem({ id: "book.id", bookName: "books.name" });
  };

  return (
    <div className={styles.books}>
      <div className={styles["book-results"]}>
        {books.map((book) => {
          return (
            <>
              <Card className={styles.books} key={book.volumeInfo.title}>
                <a href={book.volumeInfo.previewLink} target="_blank">
                  <div>{book.volumeInfo.title}</div>
                  <img
                    src={
                      book.volumeInfo.imageLinks === undefined
                        ? ""
                        : `${book.volumeInfo.imageLinks.thumbnail}`
                    }
                    alt={book.title}
                  />
                </a>
                <button onClick={favoritesListAddHandler}>
                  ADD TO FAVORITES
                </button>
                <button onClick={readListAddHandler}>ADD TO READ </button>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Results;
