import React from "react";
import "./card.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { GoPencil } from "react-icons/go";

const ProductCard = ({ product }) => {
  return (
    <div className="column-center overflow-hidden card-box-style">
      <img
        src={product.image}
        alt={product.name}
        className="card-image-style"
      />
      <div className="column-start gap-10 w-full p-10-20">
        <div className="w-full center gap-20">
          <h3 style={{ overflow: "hidden", height: "25px" }} className="w-full">
            {product.name}
          </h3>
          <h3>{product.price}$</h3>
        </div>
        <div className="center gap-10">
          <button className="button-common-style p-5-10">
            <GoPencil size="1.2rem" />
          </button>
          <button className="button-common-style p-5-10">
            <FaRegTrashAlt size="1.1rem" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
