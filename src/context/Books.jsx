import axios from "axios";
import { createContext, useState } from "react";
const BooksContext = createContext();
// Custom Provider
function Provider({ children }) {
  const [books, setBooks] = useState([]); // root state , will use bookCreate Component to add values in thr array

  const fetchBooks = async () => {
    const resp = await axios.get("http://localhost:3000/books");
    setBooks(resp.data); // update the state with new array of books
  };

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
  const valueToShare = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks,
  };

  return (
    // sharing object to rest of the application
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider }; //named export

export default BooksContext;
