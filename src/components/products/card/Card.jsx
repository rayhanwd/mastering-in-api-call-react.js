import React from "react";
import Rating from "../rating/Rating";

const Card = ({ product }) => {
  const { title, price, image, rating } = product;

  return (
    <div className="card">
      <div className="card-img-top">
        <img src={image} alt="ProductImage" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">${price}</p>
        <div className="card-rating">
          <Rating rating={rating.rate} />
        </div>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
