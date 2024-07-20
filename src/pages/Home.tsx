import React from 'react';
import Menu from '../components/Menu';
import BannerSection from '../components/BannerSection';
import TrendingSection from '../components/TrendingSection';
import PostList from '../components/PostList';
import AddPost from '../components/addPost';
import TopSection from '../components/TopSection';

function Home() {
  return (
    <div>
      <div className="row">
        <Menu />
      </div>
      <div className="row justify-content-center">
        <div className="col-8 mt-4">
          <div className="row mt-5">
            <BannerSection />
          </div>
          <div className="row justify-content-center pb-3">
            <TrendingSection />
          </div>
          <div className="row mt-5">
            <div className="col-12">
              <h2 className="title fw-bold m-0">KlipWall</h2>
            </div>
            <div className="col-8">
              <AddPost />
              <PostList />
            </div>
            <div className="col-4">
              <TopSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
