import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import '../pages/home/home.css';


function Books() {
  return (
    <>
      <div className="d-flex flex-wrap gap-6">
        <div className="books-sale">
          <h1 className="books-sale-content"><strong>Books and Sale</strong></h1>
        </div>
      </div>

      <div className="row">
        {[...Array(6)].map((_, idx) => (  /* This allows you to create 6 cards and avoid writing the same code repeatedly. We can store the data in a constant to easily make changes.*/
          <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4" key={idx}>
            <div className="custom-card-wrapper">
              <div className="card offers">
                <div className="card-img-container position-relative">
                  <img src="/images/harry.jpg" className="card-img-top" alt="Livre" />
                  <div className="discount-badge">50%</div>
                </div>
              </div>
              <div className="card-details mt-2">
                <h6 className="fw-bold mb-1">Les mésaventures de...</h6>
                <p className="text-custom-star mb-2">Aventure, Survie</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="text-star">
                    <FontAwesomeIcon icon={faStar} /> 4.7
                  </div>
                  <div className="text-end">
                    <span className="fw-bold">$45.4</span>
                    <span className="text-muted text-decoration-line-through ms-2">$60</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Books;
