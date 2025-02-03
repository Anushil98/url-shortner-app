"use client";

import { useState, useEffect } from "react";

const BannerCarousel = () => {
  const banners = [
    { id: 1, text: "Slide 1", bgColor: "#FF5733" },
    { id: 2, text: "Slide 2", bgColor: "#33A8FF" },
    { id: 3, text: "Slide 3", bgColor: "#33FF77" },
  ];

  const next = (pos: number, total: number) => {
    pos = (pos + 1) % total;
    return pos;
  };
  const prev = (pos: number, total: number) => {
    pos = pos - 1;
    if (pos < 0) pos = pos + total;
    return pos;
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  const [prevIndex, setPrevIndex] = useState(
    prev(currentIndex, banners.length)
  );

  const [nextIndex, setNextIndex] = useState(
    next(currentIndex, banners.length)
  );

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  //   }, 3000); // Auto-slide every 3 seconds

  //   return () => clearInterval(interval); // Cleanup on unmount
  // }, []);

  const nextSlide = () => {
    const prevIdx = prevIndex;
    const currIdx = currentIndex;
    const nextIdx = nextIndex;
    setNextIndex(currIdx);
    setCurrentIndex(prevIdx);
    setPrevIndex(prev(prevIdx, banners.length));
  };

  const prevSlide = () => {
    const prevIdx = prevIndex;
    const currIdx = currentIndex;
    const nextIdx = nextIndex;
    setPrevIndex(currIdx);
    setCurrentIndex(nextIdx);
    setNextIndex(next(nextIdx, banners.length));
  };

  return (
    <div className="carousel">
      <div
        className="carousel-container"
        // style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <div
          key={banners[prevIndex].id}
          className={`slide left`}
          style={{ backgroundColor: banners[prevIndex].bgColor }}
        >
          {banners[prevIndex].text}
        </div>
        <div
          key={banners[currentIndex].id}
          className={`slide center`}
          style={{ backgroundColor: banners[currentIndex].bgColor }}
        >
          {banners[currentIndex].text}
        </div>
        <div
          key={banners[nextIndex].id}
          className={`slide right`}
          style={{ backgroundColor: banners[nextIndex].bgColor }}
        >
          {banners[nextIndex].text}
        </div>
      </div>
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default BannerCarousel;
