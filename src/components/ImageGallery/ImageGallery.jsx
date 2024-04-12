import React, { Component } from 'react';
import styles from "./ImageGallery.module.css";
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
// import { render } from '@testing-library/react';


class ImageGallery extends Component {

    render() {
         const { images, onImageClick } = this.props;
        return (
            <ul className={styles.itemContainer}>
                {images.map(image => (
                    <ImageGalleryItem key={image.id} image={image }  onImageClick={onImageClick} />
             ))}
             </ul>
        );
    }
}

export default ImageGallery;