import { useState } from "react";
import "./BookForm.css";

const BookForm = (props) => {
  // const [enteredName, setEnteredName] = useState("");
  // const [enteredPage, setEnteredPage] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");

  const [userInput, setUserInput] = useState({
    enteredName: "",
    enteredPage: "",
    enteredDate: "",
  });

  const nameChangeHandler = (event) => {
    //pass in a function to setState
    //it will receives snapshot of the previous state, safer way to get latest state
    setUserInput((prevState) => {
      return { ...prevState, enteredName: event.target.value };
    });
    // setUserInput({ ...userInput, enteredName: event.target.value });
    // setEnteredName(event.target.value);
  };

  const pageChangeHandler = (event) => {
    setUserInput({ ...userInput, enteredPage: event.target.value });
    // setEnteredPage(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setUserInput({ ...userInput, enteredDate: event.target.value });
    // setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const BookData = {
      id: Math.random().toString(),
      name: userInput.enteredName,
      page: userInput.enteredPage,
      startDate: new Date(userInput.enteredDate),
    };

    props.onSaveBookData(BookData);
    setUserInput({ enteredName: "", enteredPage: "", enteredDate: "" });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-book__controls">
        <div className="new-book__control">
          <label>Book Name</label>
          <input
            type="text"
            value={userInput.enteredName}
            onChange={nameChangeHandler}
          />
        </div>
        <div className="new-book__control">
          <label>Page Number</label>
          <input
            type="number"
            min="0"
            step="1"
            value={userInput.enteredPage}
            onChange={pageChangeHandler}
          />
        </div>
        <div className="new-book__control">
          <label>Start Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2030-01-01"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-book__actions">
          <button type="submit">Add Book</button>
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default BookForm;
