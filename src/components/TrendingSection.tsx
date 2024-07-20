import React from 'react';
import { getTrendingItems } from '../services/Trending';
import { BsThreeDots } from 'react-icons/bs';

let uniqueIdCounter = 100; // Counter for unique IDs

const TrendingSection = () => {
  const items = getTrendingItems();
  const carouselId = `carouselTrending-${uniqueIdCounter++}`;
  const numSlides = Math.ceil(items.length / 3);

  return (
    <>
      <div className="row mb-4">
        <div className="col-12">
          <h2 className="title fw-bold">Trending Now</h2>
        </div>
      </div>
      <div id={carouselId} className="carousel carousel-trending slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {Array.from({ length: numSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className={`carousel-item ${slideIndex === 0 ? 'active' : ''}`}>
              <div className="row">
                {items.slice(slideIndex * 3, slideIndex * 3 + 3).map((subItem, subIndex) => (
                  <div key={subIndex} className="col-md-4">
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                      <div className="w-100 h-100 item-trending">
                        <img src={subItem.backgroundImg} className="d-block rounded" alt="background" />
                        <div className="p-2">
                          <h5 className="title fw-bold">{subItem.title}</h5>
                          {subItem.categories && (
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="d-flex flex-wrap">
                                {subItem.categories.map((category, index) => (
                                  <span key={index} className="badge category me-1">
                                    #{category}
                                  </span>
                                ))}
                              </div>
                              <p className="btn btn-dark d-flex align-items-center mb-0">
                                <BsThreeDots />
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="carousel-indicators mt-3">
            {Array.from({ length: numSlides }).map((_, index) => (
              <button
                key={index}
                data-bs-target={`#${carouselId}`}
                data-bs-slide-to={index}
                className={`carousel-indicator ${index === 0 ? 'active' : ''}`}
                aria-current={index === 0 ? 'true' : 'false'}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingSection;
