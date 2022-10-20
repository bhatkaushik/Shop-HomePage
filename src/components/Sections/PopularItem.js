import React from "react";
import StarRating from "../StarRating";
import ProductAction from "./ProductAction";

const PopularItem = () => {
  
  return (
    <div className="col mb-5">
      <div className="card h-100">
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
            <h5 className="fw-bolder">Popular Item</h5>
            {/* <!-- Product reviews--> */}
            <div className="d-flex justify-content-center small text-warning mb-2">
              <StarRating />
            </div>
            {/* <!-- Product price--> */}
            $40.00
          </div>
        </div>
        <ProductAction />
      </div>
    </div>
  );
};

export default PopularItem;
