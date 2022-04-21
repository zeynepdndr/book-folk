import BookItem from "./components/BookItem";

function App() {
  return (
    <div className="App">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <BookItem />
    </div>
  );
}

export default App;
