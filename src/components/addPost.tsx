import React, { useState } from 'react';
import { FaImage, FaVideo, FaTags, FaSmile } from 'react-icons/fa';
import { IoMdMic } from 'react-icons/io';
import { addPost } from '../services/Posts';

const AddPost = () => {
  const [content, setContent] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [privacy, setPrivacy] = useState('Public');

  const handleExpand = () => {
    setExpanded(true);
  };

  const handlePost = () => {
    if (content.trim()) {
      const newPost = {
        id: Math.random(),
        user: {
          name: 'New User', // Aquí puedes poner el nombre del usuario actual
          avatar: 'https://via.placeholder.com/50', // Aquí puedes poner el avatar del usuario actual
          time: 'Just now',
          verified: false,
        },
        content,
        images: [], // Aquí puedes agregar lógica para subir imágenes
        stats: {
          likes: 0,
          comments: 0,
          shares: 0,
        },
      };

      addPost(newPost);
      setContent('');
      setExpanded(false);
    }
  };

  return (
    <div className="add-post my-4">
      <div className={`card ${expanded ? 'p-3' : 'p-3'}`} onClick={handleExpand}>
        <div className="row">
          <div className="col-auto d-flex align-items-start">
            <img
              src="https://via.placeholder.com/50"
              alt="User"
              className="rounded-circle"
              style={{ width: '40px', height: '40px' }}
            />
          </div>
          <div className="col ps-0">
            {expanded ? (
              <>
                <textarea
                  className="form-control mb-3 p-3"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={3}
                />
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex border border-secondary rounded-pill">
                    <div className="d-flex align-items-center">
                      <p className="mb-0 ms-4 me-2 text-light">Agrega</p>
                    </div>
                    <button className="btn btn-dark">
                      <FaImage />
                    </button>
                    <button className="btn btn-dark">
                      <FaVideo />
                    </button>
                    <button className="btn btn-dark">
                      <IoMdMic />
                    </button>
                    <button className="btn btn-dark">
                      <FaTags />
                    </button>
                    <button className="btn btn-dark me-2">
                      <FaSmile />
                    </button>
                  </div>
                  <div className="d-flex align-items-center">
                    <select
                      className="form-select w-auto me-2"
                      value={privacy}
                      onChange={(e) => setPrivacy(e.target.value)}
                    >
                      <option value="Public">Public</option>
                      <option value="Friends">Friends</option>
                      <option value="Only me">Only me</option>
                    </select>
                    <button className="btn btn-primary px-4 py-2 fw-bold" onClick={handlePost}>
                      Post
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <input
                type="text"
                className="form-control px-4 py-2"
                placeholder="What are you thinking?"
                onFocus={handleExpand}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
