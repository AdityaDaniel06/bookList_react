import { useState, useContext } from "react";
import BooksContext from "../context/Books";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useContext(BooksContext);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit();
    editBookById(book.id, title);
  };
  return (
    <>
      <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleTitleChange} />
        <button className="button is-primary">Save Changes</button>
      </form>
    </>
  );
}

export default BookEdit;
