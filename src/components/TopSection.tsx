import React from 'react';
import { getTop5Data } from '../services/Top5';
import { FaStar } from 'react-icons/fa';

let uniqueIdCounter = 200;

const TopSection = () => {
  const top5Data = getTop5Data();
  const carouselId = `carouselTop5-${uniqueIdCounter++}`;

  return (
    <div className="card top5 pb-5">
      <div className="px-4 align-items-center justify-content-center text-center">
        <div className="title-container fw-bold py-2 my-3">Top 5</div>
      </div>
      <div id={carouselId} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {top5Data.map((section, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div>
                <p className={`mb-0 title text-center fw-bold ${section.type}`}>{section.title}</p>
              </div>
              <div className="card-body px-4">
                {section.items.map((item) => (
                  <div key={item.position} className="position-container d-flex align-items-center px-3 py-2 mb-2">
                    <div className="position me-2 title fw-bold">{item.position}</div>
                    <img src={item.avatar} alt={item.name} className="profile-image rounded-circle me-2" />
                    <div className="name me-auto">{item.name}</div>
                    <div className={`score d-flex align-items-centers fw-bold ${section.type}`}>
                      <FaStar size={24} className="me-1" />
                      {item.score}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-indicators mt-3">
          {top5Data.map((section, index) => (
            <button
              key={index}
              data-bs-target={`#${carouselId}`}
              data-bs-slide-to={index}
              className={`carousel-indicator ${section.type} ${index === 0 ? 'active' : ''}`}
              aria-current={index === 0 ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSection;
