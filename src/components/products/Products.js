import React from "react";
import { Link } from "react-router-dom";

const Products = ({ product, col }) => {
  return (
    <div className="col mb-3">
      <div className="card p-3 rounded">
        <img
          src={product.image}
          alt={product.title}
          className="card-img-top"
          height="200px"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <Link to={`/product/${product.id}`}>{product.title}</Link>
          </h5>
          <p className="card-text">${product.price}</p>
          <Link
            to={`/product/${product.id}`}
            className="btn btn-block"
            id="view_btn"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
