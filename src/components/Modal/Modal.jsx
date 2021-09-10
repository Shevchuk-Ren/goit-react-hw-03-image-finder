import React from 'react';

class Modal extends React.Component {
  render() {
    return (
      <div className="Overlay">
        <div className="Modal">{this.props.children}</div>
      </div>
    );
  }
}

export default Modal;
