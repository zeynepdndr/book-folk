import BookItem from "./BookItem";
import Card from "../UI/Card/Card";
import styles from "./Books.module.css";
import BookFilter from "./BookFilter";
import { useState } from "react";
import BooksChart from "./BooksChart";
import { firestoreTimestampToDate } from "../../utils/firestoreTimestampToDate";
import { db } from "../../firebase-config";
import { doc, deleteDoc } from "firebase/firestore";

const Books = (props) => {
  //TODO: Change the default filteredYear dynamically
  const [filteredYear, setFilteredYear] = useState("2022");

  const editBookHandler = (item) => {
    console.log("edit book clicked", item);
  };
  const deleteBookHandler = async (id) => {
    console.log("delete book clicked", id);
    const bookDoc = doc(db, "books", id);
    await deleteDoc(bookDoc);
  };
  const filterChangeYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredBooks = props.items.filter((book) => {
    if (book.startDate) {
      let bookYear = firestoreTimestampToDate(book.startDate).getFullYear();
      return bookYear.toString() === filteredYear;
    } else return false;
  });

  let bookContent = <p className="books-filter__empty">No book found!</p>;

  if (filteredBooks.length > 0) {
    bookContent = filteredBooks.map((item) => (
      <BookItem
        key={item.id}
        item={item}
        onEdit={editBookHandler}
        onDelete={deleteBookHandler}
      />
    ));
  }
  return (
    <Card className={styles.books}>
      <BookFilter selected={filteredYear} onChangeYear={filterChangeYear} />
      <BooksChart items={filteredBooks} />
      {bookContent}
    </Card>
  );
};

export default Books;
