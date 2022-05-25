import BookItem from "./BookItem";
import Card from "../UI/Card/Card";
import styles from "./Books.module.css";
import BookFilter from "./BookFilter";
import { useEffect, useState } from "react";
import BooksChart from "./BooksChart";
import { firestoreTimestampToDate } from "../../utils/firestoreTimestampToDate";
import BooksService from "../../services/books.service";

const Books = (props) => {
  //TODO: Change the default filteredYear dynamically
  const [filteredYear, setFilteredYear] = useState("2022");
  const [filteredBooks, setFilteredBooks] = useState([]);

  const editBookHandler = (item) => {
    console.log("edit book clicked", item);
  };
  const deleteBookHandler = async (id) => {
    console.log("delete book clicked", id);
    BooksService.delete(id);
    filterBooks();
  };
  const filterChangeYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterBooks = () => {
    let books = props.items.filter((book) => {
      if (book.startDate) {
        let bookYear = firestoreTimestampToDate(book.startDate).getFullYear();
        return bookYear.toString() === filteredYear;
      } else return false;
    });
    console.log("books", books);
    setFilteredBooks(books);
  };

  useEffect(() => {
    filterBooks();
  }, [filteredYear]);

  let bookContent = <p className="books-filter__empty">No book found!</p>;

  console.log("filteredBooks", filteredBooks);

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
