import React from 'react';
import Loader from 'react-loader-spinner';
import Button from '../Button/Button';
import ImageGalleryItem from '../ImageGalleryItem';

class ImageGallery extends React.Component {
  state = {
    image: '',
    gallery: null,
    page: 1,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const API = '22611129-58a3168a9d70d9c0808a9c973';

    const currentSearch = this.props.search;
    const prevSearch = prevProps.search;
    const currentPage = this.state.page;
    console.log(currentPage, `okey`);
    const prevPage = prevState.page;
    if (currentSearch !== prevSearch || currentPage !== prevPage) {
      this.setState({ loading: true, gallery: null });

      fetch(
        `https://pixabay.com/api/?key=${API}&q=${currentSearch}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`,
      )
        .then(res => res.json())
        .then(gallery => this.setState({ gallery: gallery.hits }))
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  handleButton = page => {
    this.setState({
      page,
    });
    console.log(this.state.page, `aper`);
  };
  toggleModal = largeImage => {
    this.props.onClick(largeImage);
  };
  render() {
    const { gallery, loading } = this.state;
    return (
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
