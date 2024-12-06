import React, { useState } from "react";
import "./create.css";
import { Link } from "react-router-dom";

const Create = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleAddProduct = () => {
    console.log(newProduct);
  }
console.log(newProduct);
  return (
    <div className="main-common-style center">
      <div className="container-common-style gap-20 center">
        <div className="column-center mt-50 form-style gap-20">
          <h2 className="mb-20">Create New Product</h2>
          <div className="form-group column-center">
            <input
              name="name"
              value={newProduct.name}
              onChange={(e) => {
                setNewProduct({ ...newProduct, name: e.target.value });
              }}
              type="text"
            />
            <label>Type the Name of Product</label>
          </div>
          <div className="form-group column-center">
            <input
              name="price"
              type="text"
              value={newProduct.price}
              onChange={(e) => {
                setNewProduct({ ...newProduct, price: e.target.value });
              }}
            />
            <label>Type the Price of Product</label>
          </div>
          <div className="form-group column-center">
            <input
              type="file"
              name="image"
              value={newProduct.image}
              onChange={(e) => {
                setNewProduct({ ...newProduct, image: e.target.value });
              }}
            />
            <p>Drop Image for Product</p>
          </div>
          <button onClick={handleAddProduct} className="button-common-style add-btn">
            {/* <Link style={{ textDecoration: "none", color: "white" }} to="/"> */}
              Add
            {/* </Link> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;
