// BookRecommendationEngine.jsx
import React, { useState } from "react";
import "./BookRecommendations.css";
import bookData from "../books.json";

const BookRecommendations = () => {
  // State for all book data
  const [books, setBooks] = useState(bookData);

  // SUGGESTED TODOS:
  // TODO: Implement state for selected genre and recommendations
  const [selectedGenre, setSelectedGenre]= useState(null);
  const[recommendations, setRecommendations]= useState([])
  
  // TODO: Implement the handleGenreSelect function
  const handleGenreSelect=(genre)=>{
    setSelectedGenre(genre);
    setRecommendations(books[genre]);
  }

  return (
    <div className="book-recommendation-engine" className="book-recommendations">
      <h2>Book Recommendation Engine</h2>
      <div className="genre-buttons">
        {/* TODO: Map over genres and create buttons */}
        {Object.keys(books).map((genre)=>(
          <button key={genre} onClick={()=> handleGenreSelect(genre)}>{genre}</button>
        ))}
      </div>
      <div className="book-list">
        <h3>Recommendations:</h3>
        {/* TODO: Display recommendations based on selected genre */}
        <ul>{recommendations.map((book, index)=>(
          <li key={index}>{book}</li>
        ))}
        </ul>
      </div>
    </div>
  );
};

export default BookRecommendations;