import React from "react";


const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="https://images.pexels.com/photos/5946051/pexels-photo-5946051.jpeg?auto=compress&cs=tinysrgb&w=1600"
          className="card-img"
          alt="Background"
          height="1000px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">NEW QUALITY PRODUCTS</h5>
            <p className="card-text lead fs-2">
              CHECK OUT ALL TYPES OF FARM INPUTS HERE
            </p>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Home;