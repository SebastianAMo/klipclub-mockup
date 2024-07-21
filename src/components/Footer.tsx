import React from 'react';
import { FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import { IoLogoInstagram } from 'react-icons/io5';
import { TbSquareLetterKFilled } from 'react-icons/tb';

function Footer() {
  return (
    <footer className="footer text-white text-center py-4 mb-2">
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-12 my-4 d-flex align-items-center justify-content-center">
            <TbSquareLetterKFilled className="icon-green me-1" size={40} />
            <h5 className="fw-bold fs-4 mb-0">klipclub</h5>
          </div>
          <div className="col-12">
            <ul className="list-inline ">
              <li className="list-inline-item mx-2">
                <a href="#" className="btn btn-dark">
                  Legal
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a href="#" className="btn btn-dark">
                  Privacy Center
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a href="#" className="btn btn-dark">
                  Privacy Policy
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a href="#" className="btn btn-dark">
                  Cookies
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a href="#" className="btn btn-dark">
                  About Ads
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <span className="btn btn-dark">© 2022 Klipclub</span>
              </li>
            </ul>
          </div>
          <div className="col-12">
            <ul className="list-inline">
              <li className="list-inline-item mx-2">
                <div className="btn btn-secondary rounded-circle">
                  <FaFacebookF />
                </div>
              </li>
              <li className="list-inline-item mx-2">
                <div className="btn btn-secondary rounded-circle">
                  <IoLogoInstagram />
                </div>
              </li>
              <li className="list-inline-item mx-2">
                <div className="btn btn-secondary rounded-circle">
                  <FaXTwitter />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
