import React from 'react';

import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Modal from '../Modal/Modal';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class App extends React.Component {
  state = {
    showModal: false,
    search: '',
    photo: null,
    page: 1,
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
    console.log(search, `result search`);
    this.setState({
      search,
    });
  };

  render() {
    const { showModal, search, photo, page } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
        <ImageGallery search={search} onClick={this.toggleModal}></ImageGallery>

        {/* <button type="button" onClick={this.toggleModal} className="Button">
          Load More
        </button> */}
        {/* {loading && (
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        )} */}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={photo} alt="" />
            {/* <button type="button" onClick={this.toggleModal}></button> */}
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
