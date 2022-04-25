import Books from "./components/Books/Books";

function App() {
  const books = [
    {
      id: "e1",
      name: "The Book of the Day",
      page: 545,
      startDate: new Date("sep 01, 2020 01:59:59"),
    },
    {
      id: "e2",
      name: "The Book of the Month",
      page: 546,
      startDate: new Date(2021, 2, 12),
    },
  ];

  return (
    <div>
      <Books items={books} />
    </div>
  );
}

export default App;
