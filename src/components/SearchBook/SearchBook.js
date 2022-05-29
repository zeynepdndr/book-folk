import { useState } from "react";
import Button from "../UI/Button/Button";
import Results from "../Results/Results";
import axios from "axios";
import styles from "./SearchBook.module.css";

const SearchBook = (props) => {
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
          "&maxResults=4"
      )
      .then((response) => {
        setBookResults(response.data.items);
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
            <div className="search-book__actions">
              <Button type="submit">Search</Button>
            </div>
          </div>
        </form>
      </div>
      <Results books={bookResults} />
    </>
  );
};

export default SearchBook;
