import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images }) => {
  console.log('images in ImageGallery: ', images);

  return (
    <>
      <h3>ImageGallery</h3>
      <ul>
        {/* Набір елементів списку із зображеннями */}
        {images !== null &&
          images.map(image => {
            return (
              <li key={image.id}>
                <ImageCard image={image} />
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default ImageGallery;
