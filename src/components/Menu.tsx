import React from 'react';
import { TbSquareLetterKFilled } from 'react-icons/tb';
import { FaVideo } from 'react-icons/fa';
import { FiMessageCircle } from 'react-icons/fi';
import { MdOutlineNotificationsNone } from 'react-icons/md';

function Menu() {
  return (
    <header className="header container-fluid py-2">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <div className="logo d-flex align-items-center me-5">
            <TbSquareLetterKFilled className="icon-green me-1" size={30} />
            <span className="fw-bold">Klipclub</span>
          </div>
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <a className="btn btn-dark fw-bold me-2" href="#">
                  Broadcasts
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-dark fw-bold me-2" href="#">
                  Virtual Events
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-dark fw-bold me-2" href="#">
                  Artists
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-dark fw-bold" href="#">
                  KlipWall
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="d-flex align-items-center">
          <div className="search-container pe-6">
            <input type="text" className="form-control search-input border-0 rounded-pill me-2" placeholder="Search" />
          </div>
          <div className="btn btn-dark rounded-circle">
            <FaVideo className="icon-green" size={22} />
          </div>
        </div>
        <div className="d-flex align-items-center">
          <button className="btn btn-secondary rounded-circle me-2">
            <FiMessageCircle size={22} />
          </button>
          <button className="btn btn-secondary rounded-circle me-2">
            <MdOutlineNotificationsNone size={22} />
          </button>
          <div className="profile-image-container">
            <img
              src="https://imgv3.fotor.com/images/cover-photo-image/ai-generate-dragon-from-text-in-Fotor-AI-image-generator.jpg"
              alt="Profile"
              className="profile-image rounded-circle"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Menu;
