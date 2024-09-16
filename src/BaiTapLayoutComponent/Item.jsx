import React from "react";

export const Item = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-4 text-center">
          <div
            className="bg-primary d-inline-block p-3 rounded-3 position-relative translate-middle-y"
            style={{ top: 75 }}
          >
            <i class="fa-solid fa-object-group fs-1 text-white "></i>
          </div>
          <div className="bg-light py-5 rounded-3 m-3">
            <div className="px-5">
              <h3 className="fw-bold">Fresh new layout</h3>
              <p>
                With Bootstrap 5, we've created a fresh new layout for this
                template!
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 text-center">
          <div
            className="bg-primary d-inline-block p-3 rounded-3 position-relative translate-middle-y"
            style={{ top: 75 }}
          >
            <i class="fa-solid fa-download fs-1 text-white"></i>
          </div>
          <div className="bg-light py-5 rounded-3 m-3">
            <div className="px-5">
              <h3 className="fw-bold">Free to download</h3>
              <p>
                As always, Start Bootstrap has a powerful collectin of free
                templates.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 text-center">
          <div
            className="bg-primary d-inline-block p-3 rounded-3 position-relative translate-middle-y"
            style={{ top: 75 }}
          >
            <i class="fa-regular fa-file-lines fs-1 text-white"></i>
          </div>
          <div className="bg-light py-5 rounded-3 m-3">
            <div className="px-5">
              <h3 className="fw-bold">Jumbotron hero header</h3>
              <p>
                The heroic part of this template is the jumbotron hero header!
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 text-center">
          <div
            className="bg-primary d-inline-block px-4 py-3 rounded-3 position-relative translate-middle-y"
            style={{ top: 75 }}
          >
            <i class="fa-solid fa-b fs-2 text-white"></i>
          </div>
          <div className="bg-light py-5 rounded-3 m-3">
            <div className="px-5">
              <h3 className="fw-bold">Feature boxes</h3>
              <p>
                We've created some custom feature boxes using Bootstrap icons!
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 text-center">
          <div
            className="bg-primary d-inline-block p-3 rounded-3 position-relative translate-middle-y"
            style={{ top: 75 }}
          >
            <i class="fa-solid fa-code fs-1 text-white"></i>
          </div>
          <div className="bg-light py-5 rounded-3 m-3">
            <div className="px-5">
              <h3 className="fw-bold">Simple clean code</h3>
              <p>
                We keep our dependencies up to date and squash bugs as they
                come!
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 text-center">
          <div
            className="bg-primary d-inline-block p-3 rounded-3 position-relative translate-middle-y"
            style={{ top: 75 }}
          >
            <i class="fa-regular fa-circle-check fs-1 text-white"></i>
          </div>
          <div className="bg-light py-5 rounded-3 m-3">
            <div className="px-5">
              <h3 className="fw-bold">A name you trust</h3>
              <p>
                Start Bootstrap has been the leader in free Bootstrap templates
                since 2013!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
