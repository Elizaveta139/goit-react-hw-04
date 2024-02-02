import { useState, useEffect } from 'react';
// import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { fetchImages } from '../imagesApi';
import { SearchBar } from '../SearchBar/SearchBar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { ErrorNoImages } from '../ErrorNoImages/ErrorNoImages';
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn';
import { ImageModal } from '../ImageModal/ImageModal';

import './App.module.css';

export function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPage, setTotalPage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    urls: '',
    description: '',
    likes: '',
    user: '',
  });

  console.log('images', images);

  async function searchImages(newQuery) {
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setImages([]);
    setTotalPage(null);
    setIsModalOpen(false);
  }

  function handleLoadMore() {
    setPage(page + 1);
  }

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function componentUpdate() {
      try {
        setLoading(true);
        setError(false);

        let fetchedData = await fetchImages(query.split('/')[1], page);
        setTotalPage(fetchedData.total_pages);
        console.log('hhh', fetchedData.total_pages);
        setImages(prevImages => [...prevImages, ...fetchedData.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    componentUpdate();
  }, [query, page]);

  function openModal(image) {
    setIsModalOpen(true);

    const { urls, description, likes, user } = image;
    setModalInfo({ urls, description, likes, user });
  }

  console.log('setRegularImg', modalInfo);

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <SearchBar onSearch={searchImages} />
      {images.length > 0 && <ImageGallery images={images} openModal={openModal} />}
      {loading && <Loader onLoading={loading} />}
      {totalPage === 0 && <ErrorNoImages />}
      {error && <ErrorMessage />}
      {images.length > 0 && !loading && totalPage / 21 > page && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {isModalOpen && (
        <ImageModal closeModal={closeModal} isModalOpen={isModalOpen} modalInfo={modalInfo} />
      )}
      <Toaster position="top-right" />
    </>
  );
}
