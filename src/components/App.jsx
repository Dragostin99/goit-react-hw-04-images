import { createContext, useEffect, useState } from 'react';
import Searchbar from './Searchbar.js/Searchbar';
import fetchImages from './fetchImages/fetchImages';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import LoadMore from './LoadMore/LoadMore';
import ErrorDisplay from './errorDisplay/ErrorDisplay';

const perPage = 12;
export const ImagesContext = createContext();

export const App = () => {
  const [filter, setFilter] = useState('');
  const [images, setImages] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [maxPages, setMaxPages] = useState(null);
  const [largeImageUrl, setLargeImageUrl] = useState(null);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { totalHits, hits } = await fetchImages(filter, pageNum);
        const imgMaxPages = Math.ceil(totalHits / perPage);
        setMaxPages(imgMaxPages);
        const newImages = [...images, ...hits];
        setImages(newImages);
        setIsError(false);
      } catch (err) {
        console.log(err);
        setIsError(true);
      } 
    };
    if (filter) {
      fetchData();
    }

   
  }, [filter, pageNum]);

  return (
    <div className="App">
      <Searchbar
        filter={filter}
        setFilter={setFilter}
        setPageNum={setPageNum}
        setImages={setImages}
      />
      <ImagesContext.Provider
        value={{ images, setModalIsVisible, setLargeImageUrl }}
      >
        {images.length > 0 && <ImageGallery />}
      </ImagesContext.Provider>
      {modalIsVisible && (
        <Modal
          largeImageUrl={largeImageUrl}
          setModalIsVisible={setModalIsVisible}
        />
      )}
      {maxPages > 1 && (
        <LoadMore
          setPageNum={setPageNum}
          pageNum={pageNum}
          maxPages={maxPages}
        />
      )}
      {isError && <ErrorDisplay />}
    </div>
  );
};
