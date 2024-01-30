import { useState, useEffect } from 'react';
import axios from 'axios';
import { imagesApi } from '../imagesApi/imagesApi';
import { SearchBar } from '../SearchBar/SearchBar';

import './App.module.css';

export function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!query) return;

    async function componentUpdate() {
      //  запит на бекенд
      try {
        setLoading(true);

        const response = await imagesApi(query, page);
        setImages(response.data);
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
      <SearchBar />
    </>
  );
}
