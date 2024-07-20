import React from 'react';

function TopSection() {
  return (
    <div>
      <div className="row mt-5">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="ms-3">
                  <h5 className="card-title">Klipclub</h5>
                  <p className="card-text">2 hours ago</p>
                </div>
              </div>
              <div className="mt-3">
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac purus eget nunc ultricies posuere.
                  Nullam nec purus ultricies, ultricies neque et, ultrices elit. Nullam nec purus ultricies, ultricies
                  neque et, ultrices elit.
                </p>
              </div>
              <div className="mt-3">
                <button className="btn btn-secondary me-2">Like</button>
                <button className="btn btn-secondary me-2">Comment</button>
                <button className="btn btn-secondary">Share</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSection;
