import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ smallImgLink, tags, largeImgLink }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [largeImg, setLargeImg] = useState('');

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
    <GalleryItem>
      <GalleryImage
        src={smallImgLink}
        alt={tags}
        data-largeimglink={largeImgLink}
        onClick={openModal}
      />
      {isOpenModal && <Modal closeModal={closeModal} largeImg={largeImg} />}
    </GalleryItem>
  );
};

GalleryImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  'data-largeimglink': PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  largeImg: PropTypes.string.isRequired,
};
