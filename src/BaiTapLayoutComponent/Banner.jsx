import React from "react";

export const Banner = () => {
  return (
    <div className="container text-center p-5 my-5 bg-light rounded-3">
      <div className="my-5 bg-light">
        <h1 className="display-5 fw-bold">A warm welcome!</h1>
        <p className="fs-4 px-5">
          Bootstrap utility classes are used to create this jumbotron since the
          old component has been removed from the framework. Why create custom
          CSS when you can use utilities?
        </p>
        <button className="btn btn-primary px-4 fs-5">Call to action</button>
      </div>
    </div>
  );
};
