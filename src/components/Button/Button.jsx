import React from 'react';

class Button extends React.Component {
  state = {
    gallery: null,
    page: 1,
    loading: false,
  };
  handleButton = prevState => {
    this.setState({
      page: this.state.page + 1,
    });

    // setTimeout(() => {
    //    this.props.pages(this.state.page);
    // }, 1000
    // )
  };

  render() {
    return (
      <button type="button" onClick={this.handleButton} className="Button">
        Load More{' '}
      </button>
    );
  }
}

export default Button;
