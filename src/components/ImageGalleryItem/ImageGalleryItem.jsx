import React, { Component } from 'react';
import styles from './ImageGalleryItem.module.css';
class ImageGalleryItem extends Component {
  render() {
    const { image, onImageClick } = this.props;
    return (
      <li onClick={() => onImageClick(image)} className={styles.list} >
        <img className={styles.image} src={image.webformatURL } alt={image.tags} />
      </li>
    );
  }
}
export default ImageGalleryItem;
