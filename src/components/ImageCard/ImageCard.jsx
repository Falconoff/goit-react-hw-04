const ImageCard = ({ image }) => {
  // console.log('Descr:', image);
  // console.log('Hello');

  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageCard;
