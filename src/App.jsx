import { useContext, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/Books";
function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <div className="app">
      <h1>My Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
