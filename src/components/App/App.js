import React from 'react';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Modal from '../Modal/Modal';

class App extends React.Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { showModal } = this.state;
    return (
      <div>
        <Searchbar></Searchbar>
        <ImageGallery></ImageGallery>
        <button type="button" onClick={this.toggleModal} className="Button">
          Load More
        </button>
        {showModal && (
          <Modal>
            <img src="" alt="" />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
