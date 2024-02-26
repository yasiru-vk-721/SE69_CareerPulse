// src/SearchBar.js
import React from 'react';
import './SearchBar.css'; // Import the CSS file for styling

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search by job type or location"
        onChange={(e) => onSearch(e.target.value)}
        className="search-input"
      />
      <ion-icon name="search-outline" className="search-i"></ion-icon> 

       {/* 🔍<span className="search-icon" role="img" aria-label="Search">
       
      </span> */}
    </div>
  );
};

export default SearchBar;


