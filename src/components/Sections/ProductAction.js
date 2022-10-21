import React, { useState } from "react";

const ProductAction = (props) => {
  const [action, setAction] = useState("Add to Cart");

  return (
    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
      <div className="text-center">
        <a
          onClick={(e) => {
            e.preventDefault();

           
            {
              action === "Add to Cart" && setAction("Remove from Cart");
            }
            {
              action !== "Add to Cart" && setAction("Add to Cart");
            }
          }}
          className="btn btn-outline-dark mt-auto"
          href="index.html"
        >
          {action}
        </a>
      </div>
    </div>
  );
};

export default ProductAction;
