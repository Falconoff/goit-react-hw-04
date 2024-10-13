import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { getImages } from './api/images';

const ACCESS_KEY = 'yrvwBCUKI7qmqnJcluc-l1RFruvgFppZ_BRTgitL-sY';

const onSubmit = inputValue => {
  console.log('inputValue: ', inputValue);
};

function App() {
  const [images, setImages] = useState(null);

  useEffect(() => {
    async function fetchImages(params) {
      try {
        const data = await getImages();
        console.log('response: ', data);
        setImages(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchImages();
  }, []);

  return (
    <div>
      <h1>ImageFinder</h1>
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery images={images} />
    </div>
  );
}

export default App;
