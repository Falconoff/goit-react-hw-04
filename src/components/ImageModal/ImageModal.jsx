import { useEffect } from 'react';
// import Modal from 'react-modal';
import css from './ImageModal.module.css';

const ImageModal = ({ onCloseModal, bigImg }) => {
  useEffect(() => {
    const onKeyDown = evt => {
      if (evt.code === 'Escape') onCloseModal();
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  const onBackdropClick = evt => {
    if (evt.currentTarget === evt.target) onCloseModal();
  };

  return (
    <div className={css.backdrop} onClick={onBackdropClick}>
      <div className={css.modal}>
        <img src={bigImg.urls.regular} alt={bigImg.alt_description} />
        <p className={css.description}>{bigImg.description}</p>
      </div>
    </div>
  );
};

export default ImageModal;
