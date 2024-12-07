import React, { useState } from "react";
import "./create.css";
import { Link } from "react-router-dom";
import { addProductToStore } from "../../redux/add";

const Create = () => {
  const [tab, setTab] = useState(false);
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const { addProduct } = addProductToStore();
  const handleAddProduct = async () => {
    const { success, message } = await addProduct(newProduct);
    success
      ? setTitle("Successfully Created Alhamdulillah")
      : setTitle("PLease Fill In All Fields");
    success ? setColor("positive-tab") : setColor("negative-tab");
    setTimeout(() => {
      setTab(true);
    }, 0);
    setNewProduct({ name: "", price: "", image: "" });
  };
  console.log(newProduct);
  return (
    <div className="main-common-style center" onClick={() => setTab(false)}>
      <div
        className="container-common-style relative gap-20 center"
        onClick={() => setTab(false)}
      >
        {tab && <div className={`topup-tab ${color}`}>{title}</div>}
        <div
          className="column-center mt-50 form-style gap-20"
          onClick={() => setTab(false)}
        >
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
              type="text"
              name="image"
              value={newProduct.image}
              onChange={(e) => {
                setNewProduct({ ...newProduct, image: e.target.value });
              }}
            />
            <label>Drop Image for Product</label>
          </div>
          <button
            onClick={handleAddProduct}
            className="button-common-style add-btn"
          >
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
