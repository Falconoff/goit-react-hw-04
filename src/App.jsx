import { useEffect, useState } from 'react';
// import axios from 'axios';

import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { getImages } from './api/imagesApi';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';

// const ACCESS_KEY = 'yrvwBCUKI7qmqnJcluc-l1RFruvgFppZ_BRTgitL-sY';

function App() {
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const onSearch = inputValue => {
    console.log('inputValue: ', inputValue);
    setSearchValue(inputValue);
    setImages(null);
    setPage(1);
    setTotalPages(null);
  };

  const onLoadMore = () => {
    setPage(page + 1);
    console.log('page: ', page);
  };

  useEffect(() => {
    if (searchValue === null) return;

    async function fetchImages() {
      try {
        setIsLoading(true);

        // setTimeout(async () => {
        const data = await getImages(searchValue, page);

        console.log('data: ', data);
        console.log('data.results: ', data.results);
        // throw new Error('Server gone!');

        if (page !== 1) {
          setImages(prevImages => [...prevImages, ...data.results]);
        } else {
          setImages(data.results);
        }
        setTotalPages(data.total_pages);

        // }, 2000);
      } catch (error) {
        // console.log(error);
        setError(error.message);
        // setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchImages();
  }, [searchValue, page]);

  return (
    <div>
      <h1>ImageFinder</h1>
      <SearchBar onSearch={onSearch} />
      {error && <ErrorMessage error={error} />}
      {images !== null && images.length > 0 && <ImageGallery images={images} />}
      {images !== null && images.length === 0 && <p>I can`t find it</p>}
      {totalPages > page && <LoadMoreBtn onLoadMore={onLoadMore} />}
      {isLoading && <Loader />}
    </div>
  );
}

export default App;
