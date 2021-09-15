import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Searchbar extends React.Component {
  state = {
    search: '',
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
      // alert('Введите запрос');
      const notifyInfo = () =>
        toast.info('Please, enter search criteria', {
          icon: false,
          position: 'top-center',
          autoClose: 3000,
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
    this.setState({ search: '' });
    //  this.reset();
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
