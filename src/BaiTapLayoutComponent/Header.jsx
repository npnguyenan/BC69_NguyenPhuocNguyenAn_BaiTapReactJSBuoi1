import React from "react";

export const Header = () => {
  return (
    <div className="bg-dark py-1 header">
      <div className="container">
        <div className="text-white d-flex justify-content-between">
          <div>
            <h3>
              <a href="#" className="text-white">
                Start Bootsrap
              </a>
            </h3>
          </div>
          <div>
            <div className="my-2 right-text">
              <a href="#" className="d-inline px-2 fw-bold text-white ">
                Home
              </a>
              <a
                href="#"
                className="d-inline px-2 opacity-50 text-white nav-link"
              >
                About
              </a>
              <a
                href="#"
                className="d-inline px-2 opacity-50 text-white nav-link"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
