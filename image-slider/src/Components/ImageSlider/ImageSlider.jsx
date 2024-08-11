import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetching images from the dummy API
    fetch('https://picsum.photos/v2/list?page=1&limit=5')
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
      })
      .catch((error) => console.error('Error fetching images:', error));
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  if (images.length === 0) return <div>Loading...</div>;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="relative flex items-center max-w-screen-md w-full">
        {/* Prev Button */}
        <button
          className="absolute left-4 text-3xl text-gray-600 hover:text-gray-800 z-10"
          onClick={prevSlide}
        >
          <FaChevronLeft />
        </button>

        {/* Image */}
        <div className="flex justify-center w-full">
          <img
            src={images[currentIndex].download_url}
            alt={images[currentIndex].author}
            className="object-contain max-w-full max-h-96 mx-2"
          />
        </div>

        {/* Next Button */}
        <button
          className="absolute right-4 text-3xl text-gray-600 hover:text-gray-800 z-10"
          onClick={nextSlide}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
