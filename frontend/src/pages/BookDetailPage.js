// src/pages/BookDetailPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams to access route parameters
// import '../css/bookdetail.css'; // Import the CSS file

function BookDetailPage() {
  // State to hold book details
  const [book, setBook] = useState(null);

  // Access the 'id' parameter from the route
  const { id } = useParams();

  useEffect(() => {
    // Fetch book details based on the 'id' parameter
    axios.get(`${process.env.REACT_APP_API_URL}/books/${id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.error('Error fetching book details:', error);
      });
  }, [id]);

  return (
    <div>
      <h2>Book Detail Page</h2>
      {book ? (
        <div className="book-detail">
          <h3>Title: {book.title}</h3>
          <p>Author: {book.author}</p>
          <p>ISBN: {book.isbn}</p>
          <p>Genre: {book.genre}</p>
          {/* Add more book details here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default BookDetailPage;
