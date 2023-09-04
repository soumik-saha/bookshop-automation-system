// src/components/BookDetail.js
import React from 'react';
import './BookDetail.css';

function BookDetail({ book }) {
  return (
    <div className='book-detail'>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>ISBN: {book.isbn}</p>
      <p>Genre: {book.genre}</p>
      {/* Display other book details here */}
    </div>
  );
}

export default BookDetail;
