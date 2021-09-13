import React from 'react';

class Searchbar extends React.Component {
  state = {
    showModal: false,
    search: 'dog',
    photo: null,
    page: 1,
    loading: false,
  };

  handleSearchChange = evt => {
    this.setState({
      search: evt.currentTarget.value.toLowerCase(),
    });
    console.log(this.state.search);
  };
  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.search.trim() === '') {
      alert('Введите запрос');
      return;
    }
    this.props.onSubmit(this.state.search);
  };
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button
            type="submit"
            className="SearchForm-button"
            aria-label="Search"
          >
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autocomplete="off"
            onChange={this.handleSearchChange}
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
