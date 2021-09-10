import React from 'react';

const Searchbar = () => (
  <header className="Searchbar">
    <form className="SearchForm">
      <button type="submit" className="SearchForm-button" aria-label="Search">
        <span className="SearchForm-button-label">Search</span>
      </button>

      <input
        className="SearchForm-input"
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

export default Searchbar;
