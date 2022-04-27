import BookItem from "./BookItem";
import Card from "../UI/Card";
import "./Books.css";
import BookFilter from "./BookFilter";
import { useState } from "react";
import BooksChart from "./BooksChart";

function Books(props) {
  const [filteredYear, setFilteredYear] = useState(props.items);

  const filterChangeYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredBooks = props.items.filter((book) => {
    return book.startDate.getFullYear().toString() === filteredYear;
  });

  let bookContent = <p>No book found!</p>;

  if (filteredBooks.length > 0) {
    bookContent = filteredBooks.map((item) => (
      <BookItem key={item.id} item={item} />
    ));
  }
  return (
    <Card className="books">
      <BookFilter selected={filteredYear} onChangeYear={filterChangeYear} />
      <BooksChart items={filteredBooks} />
      {bookContent}
    </Card>
  );
}

export default Books;
