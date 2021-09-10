import React from 'react';
import Loader from 'react-loader-spinner';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Modal from '../Modal/Modal';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class App extends React.Component {
  state = {
    showModal: false,
    search: 'dog',
    photo: null,
    page: 1,
    loading: false,
  };
  componentDidMount() {
    const { photo, page } = this.state;
    const API = '22611129-58a3168a9d70d9c0808a9c973';
    fetch(
      `https://pixabay.com/api/?key=${API}&q=${photo}&image_type=photo&per_page=12&page=${page}`,
    )
      .then(res => res.json())
      .then(photo => this.setState({ photo: photo }));
  }
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal, photo, loading } = this.state;
    return (
      <div>
        <Searchbar></Searchbar>
        {photo && <ImageGallery gallery={photo.hits}></ImageGallery>}

        <button type="button" onClick={this.toggleModal} className="Button">
          Load More
        </button>
        {loading && (
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        )}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src="" alt="" />
            <button type="button" onClick={this.toggleModal}></button>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
