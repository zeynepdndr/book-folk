import { useState } from "react";
import Button from "../UI/Button/Button";
import styles from "./SearchBook.module.css";
import axios from "axios";
import Card from "../UI/Card/Card";

const SearchBook = (props) => {
  const BOOK_TYPES = [
    "programming",
    "business",
    "finance",
    "health",
    "science",
  ];

  const [searchedBookName, setSearchBookName] = useState("");
  const [searchedBookType, setSearchBookType] = useState("");
  const [bookResults, setBookResults] = useState([]);
  const [apiKey, setApiKey] = useState(
    "AIzaSyCmm0WCA2mODCuXb0qtDNMdq3fBnidiG80"
  );

  const bookNameChangeHandler = (event) => {
    setSearchBookName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          searchedBookName +
          "&key=" +
          apiKey +
          "&maxResults=40"
      )
      .then((response) => {
        setBookResults(response.data.items);
        console.log(response.data.items);
      });
  };

  return (
    <>
      <div className={styles["search-book"]}>
        <form onSubmit={submitHandler}>
          <div className={styles["search-book__controls"]}>
            <div className={styles["search-book__control"]}>
              <label htmlFor="bookName">Book Name</label>
              <input
                type="text"
                value={searchedBookName}
                onChange={bookNameChangeHandler}
              />
            </div>
            <div className={styles["search-book__control"]}>
              <label htmlFor="bookType">Book Type</label>
              <select
                id="bookType"
                value={searchedBookType}
                onChange={setSearchBookType}
                onBlur={setSearchBookType}
              >
                {BOOK_TYPES.map((type) => (
                  <option value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className="search-book__actions">
              <Button type="submit">Search</Button>
            </div>
          </div>
        </form>
      </div>
      {bookResults.length !== 0 && (
        <div className={styles["search-book__results"]}>
          {bookResults.map((book) => {
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
    </>
  );
};

export default SearchBook;
