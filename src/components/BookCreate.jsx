import { useState, useContext } from "react";
import BooksContext from "../context/Books";
function BookCreate() {
  const [title, setTitle] = useState("");
  const { createBook } = useContext(BooksContext);

  const handleChange = (event) => {
    // console.log(event.target.value);
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <h3>Add a Book!</h3>
      <form onSubmit={handleSubmit}>
        <label>Book Name</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Add Book</button>
      </form>
    </div>
  );
}

export default BookCreate;
