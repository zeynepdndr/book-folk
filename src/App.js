import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./components/Books/Books";
import NewBooks from "./components/NewBook/NewBook";
import ErrorModal from "./components/UI/Modal/ErrorModal";
import Header from "./components/Layout/Header/Header";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import AuthContext from "./store/auth-context";
import BookContext from "./store/book-context";
import Favorites from "./components/Favorites/Favorites";
import FavoritesContextProvider from "./store/FavoritesProvider";
import Wrapper from "./components/Helpers/Wrapper";
import SearchBook from "./components/SearchBook/SearchBook";
import Popular from "./components/Popular/Popular";
import Profile from "./components/Profile/Profile";
import Other from "./components/OthersFavorites/Other";
import BooksService from "./services/books.service";

function App() {
  const authCtx = useContext(AuthContext);
  const bookCtx = useContext(BookContext);
  const [favoritesIsShown, setFavoritesIsShown] = useState(false);
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(true);

  const getBooks = async () => {
    BooksService.getAll().then((books) => {
      bookCtx.getAll(books);
      setBooks(books);
    });
  };

  const addBookHandler = async (book) => {
    BooksService.add(book).then(() => {
      console.log("Book added", book);
      setBooks((prevBooks) => {
        return [...prevBooks, book];
      });
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

  return (
    <Wrapper>
      {/* <Other /> */}
      <BrowserRouter>
        {/* {error && <ErrorModal onClose={errorHandler} />} */}
        <FavoritesContextProvider>
          {favoritesIsShown && <Favorites onClose={hideFavoritesHandler} />}
          <Header onShowFavorites={showFavoritesHandler} />
          <main>
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
                <SearchBook />
                <NewBooks onAddBook={addBookHandler} />
                <Books items={books} />
              </>
            )}
          </main>
        </FavoritesContextProvider>
        <Routes>
          {/* <Route path="/" element={<App />} /> */}
          {/* <Route index element={<Home />} /> */}
          <Route path="popular" element={<Popular />} />
          <Route path="profile" element={<Profile />} />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
