import { useEffect } from 'react';
import css from './ImageModal.module.css';

const ImageModal = ({ onCloseModal, bigImg }) => {
  // const handleClick = () => {
  //   console.log('click to close Modal');

  //   onCloseModal();
  // };

  useEffect(() => {
    const onKeyDown = evt => {
      console.log('evt.code: ', evt.code);
      if (evt.code === 'Escape') onCloseModal();
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  const onBackdropClick = evt => {
    console.log('evt.target', evt.target);
    console.log('evt.currentTarget', evt.currentTarget);
    if (evt.currentTarget === evt.target) onCloseModal();
  };

  return (
    <div className={css.backdrop} onClick={onBackdropClick}>
      <div className={css.modal}>
        {/* <button className={css.closeBtn} type="button" onClick={onCloseModal}>
          close
        </button>
        <p>
          ImageModal. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Molestiae quod nesciunt magnam saepe nihil officia aliquid ut
          laboriosam neque quas facilis porro, sit voluptatem error perspiciatis
          alias expedita accusamus fuga.
        </p> */}
        <img src={bigImg.urls.regular} alt={bigImg.alt_description} />
        <p className={css.description}>{bigImg.description}</p>
      </div>
    </div>
  );
};

export default ImageModal;
