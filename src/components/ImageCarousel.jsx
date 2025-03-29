import { useState } from "react";

const ImageCarousel = () => {
  const images = [
      {
          src: "../public/image_projet.png",
          link:"https://github.com/LostProcessor/project_portfolio"
      }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <a href={images[currentIndex].link} ><img
          src={images[currentIndex].src}
          alt={`carousel-image-${currentIndex}`}
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        </a>
      </div>

      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4">
        <button
          onClick={handlePrev}
          className="bg-gray-700 text-white p-2 rounded-full shadow-lg"
        >
          Prev
        </button>
      </div>

      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4">
        <button
          onClick={handleNext}
          className="bg-gray-700 text-white p-2 rounded-full shadow-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
