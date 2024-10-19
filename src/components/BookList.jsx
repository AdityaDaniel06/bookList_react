import { useContext } from "react";
import BooksContext from "../context/Books";
import BookShow from "./BookShow";

function BookList({ book }) {
  const { books } = useContext(BooksContext);
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return (
    <>
      <div className="book-list">{renderedBooks}</div>
    </>
  );
}

export default BookList;
