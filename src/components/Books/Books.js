import { useContext, useEffect, useState } from "react";
import AuthContext from "../../store/auth-context";
import BookContext from "../../store/book-context";
import BooksService from "../../services/books.service";
import Login from "../Login/Login";
import ErrorModal from "../UI/Modal/ErrorModal";
import NewBooks from "../NewBook/NewBook";
import BookList from "./BookList";

const Books = () => {
  const authCtx = useContext(AuthContext);
  const bookCtx = useContext(BookContext);
  const [favoritesIsShown, setFavoritesIsShown] = useState(false);
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(true);

  const getBooks = async () => {
    BooksService.getAll().then((books) => {
      bookCtx.items = books;
      setBooks(books);
    });
  };

  const addBookHandler = async (book) => {
    BooksService.add(book).then(() => {
      console.log("Book added", book);
      setBooks((prevBooks) => {
        return [...prevBooks, book];
      });
      getBooks();
    });
  };

  const errorHandler = () => {
    setError(null);
  };

  const showFavoritesHandler = () => {
    setFavoritesIsShown(true);
  };

  const hideFavoritesHandler = () => {
    setFavoritesIsShown(false);
  };

  useEffect(() => {
    getBooks();
  }, []);

  useEffect(() => {}, [books]);

  return (
    <>
      {!authCtx.isLoggedIn && <Login />}
      {authCtx.isLoggedIn && (
        <>
          {false && (
            <ErrorModal
              title="OH! nono"
              message={"how can you do that"}
              onConfirm={errorHandler}
              onClose={() => {}}
            ></ErrorModal>
          )}
          <NewBooks onAddBook={addBookHandler} />
          <BookList items={books} />
        </>
      )}
    </>
  );
};

export default Books;
