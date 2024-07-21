import React, { useState } from 'react';
import { getPosts } from '../services/Posts';
import { Post } from '../types/Post';
import Menu from '../components/Menu';
import BannerSection from '../components/BannerSection';
import TrendingSection from '../components/TrendingSection';
import PostList from '../components/PostList';
import AddPost from '../components/addPost';
import TopSection from '../components/TopSection';
import Footer from '../components/Footer';

function Home() {
  const [posts, setPosts] = useState(getPosts());

  const addPost = async (newPost: Post) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Menu />
      </div>
      <div className="row justify-content-center mb-5">
        <div className="col-8 mt-4">
          <div className="row mt-5">
            <BannerSection />
          </div>
          <div className="row justify-content-center pb-3">
            <TrendingSection />
          </div>
          <div className="row mt-5">
            <div className="col-12">
              <h2 className="title fw-bold mb-4">KlipWall</h2>
            </div>
            <div className="col-8">
              <AddPost addPost={addPost} />
              <PostList posts={posts} />
            </div>
            <div className="col-4">
              <TopSection />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
