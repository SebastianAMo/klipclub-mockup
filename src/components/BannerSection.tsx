import React from 'react';
import CarouselItem from './react/CarouselItem';
import { getItems } from '../services/Banner';

const BannerSection = () => {
  const items = getItems();

  return (
    <div id="carouselHome" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators pt-2">
        {items.map((_, index) => (
          <div
            key={index}
            data-bs-target="#carouselHome"
            data-bs-slide-to={index}
            className={`carousel-indicator ${index === 0 ? 'active' : ''}`}
            aria-current={index === 0 ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
          ></div>
        ))}
      </div>
      <div className="carousel-inner">
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            isActive={index === 0}
            profileImg={item.profileImg}
            name={item.name}
            status={item.status}
            buttonLabel={item.buttonLabel}
            backgroundImg={item.backgroundImg}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSection;
