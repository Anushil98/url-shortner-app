import { useState, useEffect } from "react";

const BannerCarousel = () => {
  const banners = [
    { id: 1, text: "Slide 1", bgColor: "#FF5733" },
    { id: 2, text: "Slide 2", bgColor: "#33A8FF" },
    { id: 3, text: "Slide 3", bgColor: "#33FF77" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + banners.length) % banners.length
    );
  };

  return (
    <div className="carousel">
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="carousel-container">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundColor: banner.bgColor }}
          >
            {banner.text}
          </div>
        ))}
      </div>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default BannerCarousel;
