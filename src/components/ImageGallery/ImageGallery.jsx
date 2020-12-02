import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from '../ImageGallery/ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ data, getLargeImg }) => {
  return (
    <ul className={styles.ImageGallery}>
      {data.map(data => (
        <ImageGalleryItem
          key={data.id}
          webformatURL={data.webformatURL}
          largeImageURL={data.largeImageURL}
          getLargeImg={getLargeImg}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.array.isRequired,
  getLargeImg: PropTypes.func.isRequired,
};
export default ImageGallery;
