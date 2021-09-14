import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button type="button" onClick={this.props.pages} className="Button">
        Load More{' '}
      </button>
    );
  }
}

export default Button;
