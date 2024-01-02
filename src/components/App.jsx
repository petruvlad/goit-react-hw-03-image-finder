// App.js
import React, { useState } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearchSubmit = newSearchTerm => {
    setSearchTerm(newSearchTerm);
    setImages([]);
    setPage(1);
    fetchImages(newSearchTerm, 1);
  };

  const fetchImages = (query, pageNum) => {
    const apiKey = '40035722-2407ce7b1ab62bda679cb58b1';
    const perPage = 12;
    const apiUrl = `https://pixabay.com/api/?q=${query}&page=${pageNum}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

    setLoading(true);

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setImages(prevImages => [...prevImages, ...data.hits]);
        setPage(pageNum + 1);
      })
      .catch(error => console.error('Error fetching images:', error))
      .finally(() => setLoading(false));
  };

  const loadMoreImages = () => {
    fetchImages(searchTerm, page);
  };

  const openModal = imageUrl => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} openModal={openModal} />
      {loading && <Loader />}
      {images.length > 0 && <Button onClick={loadMoreImages} />}
      {selectedImage && (
        <Modal imageUrl={selectedImage} closeModal={closeModal} />
      )}
    </div>
  );
};

export default App;
