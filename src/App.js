import { useContext, useEffect, useState } from "react";
import Books from "./components/Books/Books";
import NewBooks from "./components/NewBook/NewBook";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import ErrorModal from "./components/UI/Modal/ErrorModal";
import Header from "./components/Layout/Header/Header";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import AuthContext from "./store/auth-context";
import Favorites from "./components/Favorites/Favorites";
import FavoritesContextProvider from "./store/FavoritesProvider";
import Wrapper from "./components/Helpers/Wrapper";

function App() {
  const ctx = useContext(AuthContext);
  const [favoritesIsShown, setFavoritesIsShown] = useState(false);
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(true);
  const bookCollection = collection(db, "books");

  const getBooks = async () => {
    const bookSnapshot = await getDocs(bookCollection);
    const bookList = bookSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return bookList;
  };

  const addBookHandler = async (book) => {
    await addDoc(bookCollection, book);
    console.log("Book added", book);
    setBooks((prevBooks) => {
      return [...prevBooks, book];
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
    getBooks().then((books) => {
      setBooks(books);
    });
  }, []);

  return (
    <Wrapper>
      <FavoritesContextProvider>
        {favoritesIsShown && <Favorites onClose={hideFavoritesHandler} />}
        <Header onShowFavorites={showFavoritesHandler} />
        <main>
          {!ctx.isLoggedIn && <Login />}
          {ctx.isLoggedIn && (
            <>
              {error && (
                <ErrorModal
                  title="OH! nono"
                  message={"how can you do that"}
                  onConfirm={errorHandler}
                  onClose={() => {}}
                ></ErrorModal>
              )}
              <NewBooks onAddBook={addBookHandler} />
              <Books items={books} />
            </>
          )}
        </main>
      </FavoritesContextProvider>
    </Wrapper>
  );
}

export default App;
