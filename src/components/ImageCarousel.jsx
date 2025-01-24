import React, { useState } from 'react';

// Style
import '../styles/image-carousel.css';

// Images
import backArrow from '../assets/arrow_back.png';
import forwardArrow from '../assets/arrow_forward.png';

export default function ImageCarousel({ imagesArray }) {
    const [carouselIndex, setCarouselIndex] = useState(0);

    const handleNext = () => {
        setCarouselIndex(carouselIndex === imagesArray.length - 1 ? 0 : carouselIndex + 1);
    };

    const handlePrev = () => {
        setCarouselIndex(carouselIndex === 0 ? imagesArray.length - 1 : carouselIndex - 1);
    };

    return (
        <div className="image-carousel">
            <div className="carousel-item">
                <img key={carouselIndex} src={imagesArray[carouselIndex]} alt="carousel slide" className="fade" />
            </div>
            <button className="back-arrow" onClick={handlePrev}>
                <img src={backArrow} alt="back arrow" />
            </button>
            <button className="forward-arrow" onClick={handleNext}>
                <img src={forwardArrow} alt="forward arrow" />
            </button>
        </div>
    );
}
