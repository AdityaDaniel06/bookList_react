import axios from "axios";

import { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
function App() {
  const [books, setBooks] = useState([]); // root state , will use bookCreate Component to add values in thr array

  const fetchBooks = async () => {
    const resp = await axios.get("http://localhost:3000/books");
    setBooks(resp.data); // update the state with new array of books
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  // createBook event handler
  const createBook = async (title) => {
    const res = await axios.post("http://localhost:3000/books", {
      title,
    });
    // console.log(res);

    const updatedBooks = [...books, res.data];
    setBooks(updatedBooks); // update the state with new array of books
  };

  const deleteBookById = async (id) => {
    const resp = await axios.delete(`http://localhost:3000/books/${id}`);

    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks); // update the state with new array of books
  };

  const editBookById = async (id, newTitle) => {
    const resp = await axios.put(`http://localhost:3000/books/${id}`, {
      title: newTitle,
    });
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...resp.data };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>My Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
