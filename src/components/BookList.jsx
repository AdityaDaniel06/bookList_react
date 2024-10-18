import { useContext } from "react";
import BooksContext from "../context/Books";
import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
  const { count, incrementCount } = useContext(BooksContext);
  const value = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    );
  });
  return (
    <>
      <div className="book-list">
        {renderedBooks}
        <p>{count}</p>
        <button onClick={incrementCount}>Increment Count</button>
      </div>
    </>
  );
}

export default BookList;
