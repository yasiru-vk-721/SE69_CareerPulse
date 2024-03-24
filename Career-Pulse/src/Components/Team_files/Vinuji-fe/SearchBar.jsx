// src/SearchBar.js
import React from 'react';
import './SearchBar.css'; // Import the CSS file for styling

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search By Job Type Or Location"
        onChange={(e) => onSearch(e.target.value)}
        className="search-input"
      />
      <ion-icon name="search-outline" className="search-i"></ion-icon> 
      
    </div>
  );
};

export default SearchBar;


