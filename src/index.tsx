import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthContextProvider from "./store/AuthProvider";
import BookContextProvider from "./store/BookProvider";
import FavoritesContextProvider from "./store/FavoritesProvider";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BookContextProvider>
        <FavoritesContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </FavoritesContextProvider>
      </BookContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
