import React, { useState } from "react";
import "./card.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { addProductToStore } from "../../redux/add";
import "../../pages/create/create.css";

const ProductCard = ({ product }) => {
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
      {show && (
        <div className="column-center absolute bg-white mt-50 form-style gap-20">
          <h2 className="mb-20">Update Product</h2>
          <div className="form-group column-center">
            <input
              name="name"
              value={changedProduct.name}
              placeholder={changedProduct.name}
              onChange={(e) => {
                setChangedProduct({ ...changedProduct, name: e.target.value });
              }}
              type="text"
            />
            <label>Update the Name of Product</label>
          </div>
          <div className="form-group column-center">
            <input
              name="price"
              type="text"
              value={changedProduct.price}
              placeholder={changedProduct.price}
              onChange={(e) => {
                setChangedProduct({ ...changedProduct, price: e.target.value });
              }}
            />
            <label>Update the Price of Product</label>
          </div>
          <div className="form-group column-center">
            <input
              type="text"
              name="image"
              value={changedProduct.image}
              placeholder={changedProduct.image}
              onChange={(e) => {
                setChangedProduct({ ...changedProduct, image: e.target.value });
              }}
            />
            <label>Update Image for Product</label>
          </div>
          <div className="row-start w-full gap-20">
            <button
              onClick={() => {
                handleEditProduct(product._id, changedProduct);
                setShow(!show);
              }}
              className="button-common-style w-120 add-btn positive-tab white"
            >
              Update
            </button>
            <button
              onClick={() => setShow(!show)}
              className="button-common-style w-120 add-btn bg-grey white"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
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
            <GoPencil size="1.2rem" />
          </button>
          <button
            className="button-common-style p-5-10"
            onClick={() => handleDeleteProduct(product._id)}
          >
            <FaRegTrashAlt size="1.1rem" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
