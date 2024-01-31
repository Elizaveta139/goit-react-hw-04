import { useState, useEffect } from 'react';
// import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { fetchImages } from '../imagesApi';
import { SearchBar } from '../SearchBar/SearchBar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

import './App.module.css';

export function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function searchImages(newQuery) {
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setImages([]);
  }

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function componentUpdate() {
      try {
        setLoading(true);
        setError(false);

        const fetchedData = await fetchImages(query.split('/')[1], page);
        setImages(prevImages => [...prevImages, ...fetchedData]);
      } catch (error) {
        setError(true);
        // setError({ error: 'Something went wrong. Please try again.' });
      } finally {
        setLoading(false);
      }
    }
    componentUpdate();
  }, [query, page]);

  return (
    <>
      <SearchBar onSearch={searchImages} />
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery images={images} />}
      <Loader onLoading={loading} />
      <Toaster position="top-right" />
    </>
  );
}
