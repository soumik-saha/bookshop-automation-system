// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookList from '../components/BookList'; // Import the BookList component
import "../css/home.css"; // Import the CSS file
import { Link } from 'react-router-dom';

function HomePage() {
  // State to hold the list of books
  const [books, setBooks] = useState([]);

  // useEffect to fetch books from your backend API when the component mounts
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/books`)
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  }, []);

  return (
    <div className="home-container">
      <h1>Welcome to the Bookstore</h1>
      <ul className="book-list">
        {/* Map through the list of books and create links for each */}
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`} className="book-link">
              {book.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
