import React, { useState } from "react";
import "./card.css";
import { addProductToStore } from "../../redux/add";
import "../../pages/create/create.css";

const ClientProductCard = ({ product }) => {
  const [changedProduct, setChangedProduct] = useState(product);
  const [show, setShow] = useState(false);
  const { deleteProduct, editProduct } = addProductToStore();
  const handleDeleteProduct = async (id) => {
    const { success, message } = await deleteProduct(id);
  };
  const handleEditProduct = async (id, changedProduct) => {
    const { success, message } = await editProduct(id, changedProduct);
  };
  return (
    <div className="column-center overflow-hidden card-box-style">
      {/* {show && (
        
      )} */}
      <img
        src={product.image}
        alt={product.name}
        className="card-image-style"
      />
      <div className="column-start white product-bg gap-10 w-full p-10-20">
        <h3>{product.name}</h3>
        <h3>{product.price}$</h3>
        <div className="center gap-10">
          <button
            className="button-common-style p-5-10"
            onClick={() => setShow(!show)}
          >
            Buy Car
          </button>
          <button
            className="button-common-style p-5-10"
            onClick={() => handleDeleteProduct(product._id)}
          >
            Contact Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientProductCard;
