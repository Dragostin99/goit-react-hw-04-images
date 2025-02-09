import { ImagesContext } from 'components/App';
import { useContext } from 'react';

const ImageGallery = () => {
  const { images } = useContext(ImagesContext);
  return (
    <ul className="ImageGallery">
      {images.map(img => (
        <ImageGalleryItem key={img.id} image={img} />
      ))}
    </ul>
  );
};

const ImageGalleryItem = ({ image }) => {
  const { largeImageURL, webformatURL, tags } = image;
  const { setModalIsVisible, setLargeImageUrl } = useContext(ImagesContext);
  const clickHandler = () => {
    setLargeImageUrl(largeImageURL);
    setModalIsVisible(true);
  };

  return (
    <li className="ImageGalleryItem" onClick={clickHandler}>
      <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
    </li>
  );
};

export default ImageGallery;
