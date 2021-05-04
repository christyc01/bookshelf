// grab books and title for BookList; return books.map (grab by book.id, then link to books/book.id)

import { Link } from "react-router-dom";

const BookList = ({ books, title }) => {
  return (
    <div className="books-list">
      <h1>{title}</h1>
      {books.map((book) => (
        <div className="book-preview" key={book.id}>
          <div class="divider"></div>
          <Link to={`/books/${book.id}`}>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BookList;
