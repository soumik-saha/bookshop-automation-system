// src/components/BookList.js
import React from 'react';

function BookList({ books }) {
  return (
    <ul>
      {books.map((book) => (
        <li key={book._id}>
          <a href={`/book/${book._id}`}>{book.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default BookList;
