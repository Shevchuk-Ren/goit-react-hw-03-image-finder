import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Modal from '../Modal/Modal';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class App extends Component {
  state = {
    showModal: false,
    search: '',
    photo: null,
  };

  toggleModal = photo => {
    console.log('app', photo);
    this.setState({
      photo,
    });
    console.log('app', this.state.photo);
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  handleFormSubmit = search => {
    this.setState({
      search,
    });
  };

  render() {
    const { showModal, search, photo } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
        <ImageGallery search={search} onClick={this.toggleModal}></ImageGallery>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={photo} alt="" />
          </Modal>
        )}
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          icon={false}
        />
      </div>
    );
  }
}

export default App;
