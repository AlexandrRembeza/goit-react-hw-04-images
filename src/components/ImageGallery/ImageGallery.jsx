import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal';
import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [largeImg, setLargeImg] = useState('');

  useEffect(() => {
    window.scrollBy({
      top: 360 * 2,
      behavior: 'smooth',
    });
  }, [images]);

  const openModal = e => {
    if (e.target.nodeName !== 'IMG') {
      return;
    }
    const largeImgLink = e.target.dataset.largeimglink;
    setIsOpenModal(true);
    setLargeImg(largeImgLink);
  };

  const closeModal = e => {
    setIsOpenModal(false);
  };

  return (
    <>
      <Gallery>
        {images.map(({ id, webformatURL, largeImageURL, tags }) => {
          return (
            <ImageGalleryItem
              key={id}
              smallImgLink={webformatURL}
              largeImgLink={largeImageURL}
              tags={tags}
              onClick={openModal}
            />
          );
        })}
      </Gallery>
      {isOpenModal && <Modal closeModal={closeModal} largeImg={largeImg} />}
    </>
  );
};

ImageGalleryItem.propTypes = {
  smallImgLink: PropTypes.string.isRequired,
  largeImgLink: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  largeImg: PropTypes.string.isRequired,
};
