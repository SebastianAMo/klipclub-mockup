import React from 'react';
import { Post } from '../types/Post';
import { BsThreeDots } from 'react-icons/bs';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';

const PostList = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="post-list">
      <div className="options d-flex justify-content-start align-items-center mb-4">
        <div className="btn btn-secondary me-2 fw-bold">Trending</div>
        <div className="btn btn-dark me-2 fw-bold">Friends</div>
        <div className="btn btn-dark me-2 fw-bold">Private channel</div>
      </div>
      <div>
        {posts.map((post) => (
          <div key={post.id} className="post card mb-4">
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-auto d-flex align-items-center">
                  <img src={post.user.avatar} alt={post.user.name} className="profile-image rounded-circle" />
                </div>
                <div className="col ps-0 d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <strong className="me-1">{post.user.name}</strong>
                    {post.user.verified && <span className="text-primary me-2">✔</span>}
                    <p className="mb-0">{post.user.time}</p>
                  </div>
                </div>
                <div className="col-auto">
                  <button className="btn btn-dark">
                    <BsThreeDots />
                  </button>
                </div>
              </div>
              <div className="row mb-2">
                {post.images.map((image, index) => (
                  <div key={index} className="col-4 mb-2">
                    <img src={image} alt="" className="img-fluid rounded" />
                  </div>
                ))}
              </div>
              <p>{post.content}</p>
              <hr className="my-2" style={{ borderTop: '1px solid #fff' }} />
              <div className="row">
                <div className="col">
                  <button className="btn btn-dark w-100 fw-bold">
                    <FaHeart className="me-1" size={24} /> {post.stats.likes} Likes
                  </button>
                </div>
                <div className="col">
                  <button className="btn btn-dark w-100 fw-bold">
                    <FaComment className="me-1" size={24} /> {post.stats.comments} Comments
                  </button>
                </div>
                <div className="col">
                  <button className="btn btn-dark w-100 fw-bold">
                    <FaShare className="me-1" size={24} /> {post.stats.shares} Shares
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
