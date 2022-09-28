import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  smallImgLink,
  tags,
  largeImgLink,
  onClick,
}) => (
  <GalleryItem>
    <GalleryImage
      src={smallImgLink}
      alt={tags}
      data-largeimglink={largeImgLink}
      onClick={onClick}
    />
  </GalleryItem>
);

GalleryImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  'data-largeimglink': PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
