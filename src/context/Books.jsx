import { createContext, useState } from "react";

const BooksContext = createContext();
// Custom Provider
function Provider({ children }) {
  const [count, setCount] = useState(5);

  // object  we want to use all over the application
  const valueToShare = {
    count: count,
    incrementCount: () => {
      // method that changes the 'count
      setCount(count + 1);
    },
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
