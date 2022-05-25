import Card from "../UI/Card/Card";
import styles from "./Results.module.css";

const Results = ({ books }) => {
  return (
    <div className={styles.books}>
      {!books.length ? (
        <div>No books found!</div>
      ) : (
        <div className={styles["book-results"]}>
          {books.map((book) => {
            return (
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
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Results;
