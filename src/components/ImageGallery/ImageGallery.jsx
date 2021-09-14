import React from 'react';
import Loader from 'react-loader-spinner';
import Button from '../Button/Button';
import ImageGalleryItem from '../ImageGalleryItem';
import apiFetch from '../../services/fetch-api';

class ImageGallery extends React.Component {
  state = {
    image: '',
    gallery: null,
    page: 1,
    loading: false,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const currentSearch = this.props.search;
    const prevSearch = prevProps.search;
    const currentPage = this.state.page;
    const prevPage = prevState.page;

    if (currentSearch !== prevSearch || currentPage !== prevPage) {
      this.setState({ loading: true });

      apiFetch
        .fetchApi(currentSearch, currentPage)
        .then(gallery => this.setState({ gallery: gallery.hits }))
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  handleButton = prevState => {
    this.setState({
      page: this.state.page + 1,
    });
    console.log(this.state.page, `aper`);
  };
  toggleModal = largeImage => {
    this.props.onClick(largeImage);
  };
  render() {
    const { gallery, loading, status } = this.state;
    return (
      //     if ( status === 'pending') {
      //       return  <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />;
      //     }
      // if (status === 'reject') {
      //   return  gallery.map(({ id, webformatURL, largeImageURL }) => (
      //       <ul className="ImageGallery">
      //           <ImageGalleryItem
      //             key={id}
      //             webformatURL={webformatURL}
      //             largeImage={largeImageURL}
      //             onClick={this.toggleModal}
      //             />
      //              </ul>))

      // }
      <>
        <ul className="ImageGallery">
          {gallery &&
            gallery.map(({ id, webformatURL, largeImageURL }) => (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                largeImage={largeImageURL}
                onClick={this.toggleModal}
              />
            ))}
          {loading && (
            <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
          )}
        </ul>
        {gallery && <Button pages={this.handleButton} />}
      </>
    );
  }
}

export default ImageGallery;
