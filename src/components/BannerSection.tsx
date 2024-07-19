import React from 'react';
import { getItems } from '../services/Banner';

let uniqueIdCounter = 0;

const BannerSection = () => {
  const bannerItems = getItems();
  const carouselId = `carouselHome-${uniqueIdCounter++}`;

  return (
    <div id={carouselId} className="carousel-home carousel mt-5 slide mb-5" data-bs-ride="carousel">
      <div className="carousel-inner">
        {bannerItems.map((item, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '450px' }}>
              <div className="row w-100">
                <div className="col-3 d-flex flex-column align-items-center text-white">
                  <div className="profile-container d-flex flex-column justify-content-end w-100 h-100">
                    <div className="profile-image-container text-center mb-3">
                      <img src={item.profileImg} alt="Profile" className="profile-image rounded-circle" />
                    </div>
                    <div className="text-center">
                      <h4>{item.name}</h4>
                      <p>{item.status}</p>
                      <button className="btn btn-primary mb-3">{item.buttonLabel}</button>
                      {item.description && <p>{item.description}</p>}
                    </div>
                  </div>
                </div>

                <div className="col-9 d-flex justify-content-center align-items-center">
                  <img src={item.backgroundImg} className="d-block rounded w-100" alt="background" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-indicators mt-3">
        {bannerItems.map((_, index) => (
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
  );
};

export default BannerSection;
