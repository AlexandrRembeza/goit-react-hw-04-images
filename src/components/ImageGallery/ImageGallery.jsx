import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images }) => {
  useEffect(() => {
    window.scrollBy({
      top: 360 * 2,
      behavior: 'smooth',
    });
  }, [images]);

  return (
    <Gallery>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            smallImgLink={webformatURL}
            largeImgLink={largeImageURL}
            tags={tags}
          />
        );
      })}
    </Gallery>
  );
};

ImageGalleryItem.propTypes = {
  smallImgLink: PropTypes.string.isRequired,
  largeImgLink: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
