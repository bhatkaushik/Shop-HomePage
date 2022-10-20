import React from "react";
import StarRating from "../StarRating";
import ProductAction from "./ProductAction";

const SpecialItem = () => {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        {/* <!-- Sale badge--> */}
        <div
          className="badge bg-dark text-white position-absolute"
          style={{ top: " 0.5rem", right: "0.5rem" }}
        >
          Sale
        </div>
        {/* <!-- Product image--> */}
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />
        {/* <!-- Product details--> */}
        <div className="card-body p-4">
          <div className="text-center">
            {/* <!-- Product name--> */}
            <h5 className="fw-bolder">Special Item</h5>
            {/* <!-- Product reviews--> */}
            <div className="d-flex justify-content-center small text-warning mb-2">
              <StarRating />
            </div>
            {/* <!-- Product price--> */}
            <span className="text-muted text-decoration-line-through">
              $20.00
            </span>
            $18.00
          </div>
        </div>
       <ProductAction  />
      </div>
    </div>
  );
};

export default SpecialItem;
