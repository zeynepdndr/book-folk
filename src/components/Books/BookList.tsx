import BookItem from "./BookItem";
import Card from "../UI/Card/Card";
import styles from "./BookList.module.css";
import BookFilter from "./BookFilter";
import { useEffect, useState } from "react";
import BooksChart from "./BooksChart";
import { firestoreTimestampToDate } from "../../utils/firestoreTimestampToDate";
import BookListService from "../../services/books.service";

const BookList: React.FC<any> = (props) => {
  //TODO: Change the default filteredYear dynamically
  const currentYear = new Date().getFullYear();
  const [filteredYear, setFilteredYear] = useState(currentYear);
  const [filteredBookList, setFilteredBookList] = useState([]);

  const editBookHandler = (item) => {
    console.log("edit book clicked", item);
  };
  const deleteBookHandler = async (id) => {
    console.log("delete book clicked", id);
    BookListService.delete(id);
    filterBookList();
  };
  const filterChangeYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterBookList = () => {
    let books = props.items.filter((book) => {
      if (book.startDate) {
        let bookYear = firestoreTimestampToDate(book.startDate).getFullYear();
        return bookYear == filteredYear;
      } else return false;
    });
    setFilteredBookList(books);
  };

  useEffect(() => {
    filterBookList();
  }, [filteredYear, props.items]);

  useEffect(() => {
    filterBookList();
  }, []);

  let bookContent = <p className="books-filter__empty">No book found!</p>;

  if (filteredBookList.length > 0) {
    bookContent = filteredBookList.map((item) => (
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
      <BooksChart items={filteredBookList} />
      {bookContent}
    </Card>
  );
};

export default BookList;
