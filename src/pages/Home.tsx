import React from 'react';
import Menu from '../components/Menu';
import BannerSection from '../components/BannerSection';
import TrendingSection from '../components/TrendingSection';

function Home() {
  return (
    <div>
      <Menu />
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="row">
            <BannerSection />
          </div>
          <div className="row">
            <TrendingSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
