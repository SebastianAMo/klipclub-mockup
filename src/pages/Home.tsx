import React from 'react';
import Menu from '../components/Menu';
import BannerSection from '../components/BannerSection';

function Home() {
  return (
    <div>
      <Menu />
      <div className="row justify-content-center">
        <div className="col-8">
          <BannerSection />
        </div>
      </div>
    </div>
  );
}

export default Home;
