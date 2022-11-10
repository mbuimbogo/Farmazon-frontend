import React from "react";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="https://images.unsplash.com/photo-1620200423727-8127f75d7f53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="card-img"
          alt="Background"
          height="1000px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW QUALITY PRODUCTS
            </h5>
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
