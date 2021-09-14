import React from 'react';
// import Loader from 'react-loader-spinner';
import Button from '../Button/Button';
import ImageGalleryItem from '../ImageGalleryItem';
import apiFetch from '../../services/fetch-api';
import Spinner from '../Loader';

class ImageGallery extends React.Component {
  state = {
    totalHits: 0,
    gallery: [],
    page: 1,
    loading: false,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const currentSearch = this.props.search;
    const prevSearch = prevProps.search;
    const currentPage = this.state.page;
    const prevPage = prevState.page;
    const prevGallery = this.state.gallery;

    if (currentSearch !== prevSearch) {
      this.setState({ status: 'pending', gallery: [], page: 1 });

      apiFetch
        .fetchApi(currentSearch, currentPage)
        .then(gallery => {
          console.log(`search`, gallery.hits);
          this.setState({
            gallery: gallery.hits,
            status: 'resolved',
            totalHits: gallery.hits.length,
          });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
    if (currentPage !== prevPage) {
      this.setState({ status: 'pending' });

      apiFetch
        .fetchApi(currentSearch, currentPage)
        .then(gallery => {
          console.log([gallery.totalHits, `page`]);
          this.setState({
            gallery: [...prevGallery, ...gallery.hits],
            status: 'resolved',
            totalHits: gallery.hits.length,
          });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  handleButton = prevState => {
    this.setState({
      page: this.state.page + 1,
    });
    console.log(this.state.page, `page`);
    console.log(this.state.totalHits, `total`);
  };
  toggleModal = largeImage => {
    this.props.onClick(largeImage);
  };
  render() {
    const { gallery, status, totalHits } = this.state;
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
          {totalHits === 12 && <Button pages={this.handleButton} />}
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
