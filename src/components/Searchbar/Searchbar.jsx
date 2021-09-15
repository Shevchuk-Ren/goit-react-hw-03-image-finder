import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

class Searchbar extends React.Component {
  static defaultProps = {
    search: '',
  };

  state = {
    search: this.props.search,
  };

  handleSearchChange = evt => {
    this.setState({
      search: evt.currentTarget.value.toLowerCase(),
    });
  };
  handleSubmit = evt => {
    evt.preventDefault();

    if (this.state.search.trim() === '') {
      const notifyInfo = () =>
        toast.info('Please, enter search criteria', {
          icon: false,
          position: 'top-center',
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      notifyInfo();
      return;
    }

    this.props.onSubmit(this.state.search);
    this.setState({ search: ' ' });
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
            value={this.state.search}
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

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
