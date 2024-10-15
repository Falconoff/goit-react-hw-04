import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, showBigImg }) => {
  console.log('images in ImageGallery: ', images);

  return (
    <>
      <h3>ImageGallery</h3>
      <ul>
        {/* Набір елементів списку із зображеннями */}
        {images !== null &&
          images.map(image => {
            return (
              <li className={css.card} key={image.id}>
                <ImageCard image={image} showBigImg={showBigImg} />
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default ImageGallery;
