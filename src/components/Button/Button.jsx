import React from 'react';
import PropTypes from 'prop-types';
import { animateScroll as scroll } from 'react-scroll';

class Button extends React.Component {
  scroll = () => {
    this.props.pages();
    scroll.scrollToBottom();
  };

  render() {
    return (
      <button type="button" onClick={this.scroll} className="Button">
        Load More
      </button>
    );
  }
}

export default Button;
