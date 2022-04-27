import { useState } from "react";
import BookForm from "./BookForm";
import "./NewBook.css";

const NewBooks = (props) => {
  const saveBookDataHandler = (enteredBookData) => {
    const bookData = { ...enteredBookData, id: Math.random() };
    props.onAddBook(bookData);
  };

  const [isFormVisible, setIsFormVisible] = useState(false);

  const showFormHandler = () => {
    setIsFormVisible(!isFormVisible);
  };
  const cancelAddBookHandler = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="new-book">
      {isFormVisible && (
        <BookForm
          onSaveBookData={saveBookDataHandler}
          onCancel={cancelAddBookHandler}
        />
      )}
      {!isFormVisible && (
        <div className="new-book__actions">
          <button type="button" onClick={showFormHandler}>
            Add New Book
          </button>
        </div>
      )}
    </div>
  );
};

export default NewBooks;
