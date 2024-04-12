// Modal.js
import React, { Component } from 'react';
import styles from './Modal.module.css';
class Modal extends Component {
  render() {
    const { image, onClose } = this.props;
    return (
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.modal}>
          <img src={image.largeImageURL} alt={image.tags} />
        </div>
      </div>
    );
  }
}

export default Modal;
