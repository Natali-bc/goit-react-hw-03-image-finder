import React from 'react';
import styles from '../ImageGalleryItem/ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, largeImageURL, getLargeImg }) => {
  console.log(webformatURL);
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={webformatURL}
        onClick={() => getLargeImg(largeImageURL)}
        alt=""
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  getLargeImg: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
