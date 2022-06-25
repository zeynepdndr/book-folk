import "./BookFilter.css";

const BookFilter = (props) => {
  const selectYearHandler = (event) => {
    props.onChangeYear(event.target.value);
  };

  return (
    <div className="books-filter">
      <div className="books-filter__control">
        <label>Filter by year</label>
        <select onChange={selectYearHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default BookFilter;
