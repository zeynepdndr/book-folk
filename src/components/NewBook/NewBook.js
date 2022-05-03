import { useState } from "react";
import Button from "../UI/Button";
import BookForm from "./BookForm";
import styles from "./NewBook.module.css";

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
    <div className={styles["new-book"]}>
      {isFormVisible && (
        <BookForm
          onSaveBookData={saveBookDataHandler}
          onCancel={cancelAddBookHandler}
        />
      )}
      {!isFormVisible && (
        <Button onClick={showFormHandler}>Add New Book</Button>
      )}
    </div>
  );
};

export default NewBooks;
