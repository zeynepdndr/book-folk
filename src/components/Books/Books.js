import BookItem from "./BookItem";
import Card from "../UI/Card";
import "./Books.css";

function Books(props) {
  return (
    <Card className="books">
      {props.items.map((item) => (
        <BookItem key={item.id} item={item} />
      ))}
    </Card>
  );
}

export default Books;
