import React from 'react';

interface CarouselItemProps {
  isActive: boolean;
  profileImg?: string;
  name?: string;
  status?: string;
  buttonLabel?: string;
  backgroundImg: string;
  description?: string;
  categories?: string[];
}

function CarouselItem({
  isActive,
  profileImg,
  name,
  status,
  buttonLabel,
  backgroundImg,
  description,
  categories,
}: CarouselItemProps) {
  return (
    <div className={`carousel-item ${isActive ? 'active' : ''}`}>
      <div className="d-flex justify-content-center align-items-center" style={{ height: '450px' }}>
        <div className="row w-100">
          <div className="col-3 d-flex flex-column align-items-center text-white">
            <div className="profile-image-container position-relative mt-auto">
              <img src={profileImg} alt="Profile" className="profile-image rounded-circle" />
            </div>
            <h4>{name}</h4>
            <p>{status}</p>
            <button className="btn btn-primary">{buttonLabel}</button>
            {description && <p>{description}</p>}
          </div>
          <div className="col-9 d-flex justify-content-center align-items-center">
            <img src={backgroundImg} className="d-block rounded w-100" alt="background" />
            {categories && (
              <div className="position-absolute bottom-0 start-0 p-3">
                {categories.map((category, index) => (
                  <span key={index} className="badge bg-secondary me-1">
                    {category}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselItem;
