import React from 'react';
// import Loader from 'react-loader-spinner';
import Button from '../Button/Button';
import ImageGalleryItem from '../ImageGalleryItem';
import apiFetch from '../../services/fetch-api';
import Spinner from '../Loader';

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
      this.setState({ status: 'pending' });

      apiFetch
        .fetchApi(currentSearch, currentPage)
        .then(gallery =>
          this.setState({ gallery: gallery.hits, status: 'resolved' }),
        )
        .catch(error => this.setState({ error, status: 'rejected' }));
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
    const { gallery, status } = this.state;
    // return (
    if (status === 'idle') {
      return <div>Start your search</div>;
    }
    if (status === 'pending') {
      return (
        <Spinner type="ThreeDots" color="#00BFFF" height={80} width={80} />
      );
    }
    if (status === 'resolved') {
      return (
        <>
          <ul className="ImageGallery">
            {gallery.map(({ id, webformatURL, largeImageURL, tags }) => (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                largeImage={largeImageURL}
                onClick={this.toggleModal}
                alt={tags}
              />
            ))}
          </ul>
          <Button pages={this.handleButton} />
        </>
      );
    }
    //   <>
    //     <ul className="ImageGallery">
    //       {gallery &&
    //         gallery.map(({ id, webformatURL, largeImageURL }) => (
    //           <ImageGalleryItem
    //             key={id}
    //             webformatURL={webformatURL}
    //             largeImage={largeImageURL}
    //             onClick={this.toggleModal}
    //           />
    //         ))}
    //       {loading && ( <Spinner />

    //       )}
    //     </ul>
    //     {gallery && <Button pages={this.handleButton} />}
    //   </>
    // );
  }
}

export default ImageGallery;
