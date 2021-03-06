import { useState } from "react";
import Button from "../UI/Button/Button";
import TabsButton from "../UI/TabsButton/TabsButton";
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
        <>
          <h2>Add New Book</h2>
          <TabsButton
            onSaveBookData={saveBookDataHandler}
            onCancel={cancelAddBookHandler}
          />
        </>
      )}
      {!isFormVisible && (
        <Button onClick={showFormHandler}>Add New Book</Button>
      )}
    </div>
  );
};

export default NewBooks;
