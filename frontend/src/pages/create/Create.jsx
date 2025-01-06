import React, { useRef, useState } from "react";
import "./create.css";
import { Link } from "react-router-dom";
import { addProductToStore } from "../../redux/add";
import { createCarInput, createColors } from "../../constants/create";

const Create = () => {
  const [check, SetCheck] = useState({});
  const [tab, setTab] = useState(false);
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const [colour, setColour] = useState("");
  const [lights, setLights] = useState(createColors);
  const handleCheckbox = (color) => {
    SetCheck((prev) => ({ ...prev, [color]: !prev[color] }));
    check[color]&&setNewProduct({...newProduct, colors: })
  };
  const handlecolors = () => {
    setLights(lights.push(colour));
    let b = lights.filter((v, i) => i != i + 1);
    return setLights(b);
  };
  // const handleColorAvailable = () => {
  //   Object.values(check, "check")
  // }

  console.log(Object(check));
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
    colors: []
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
  // console.log(newProduct);
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
          <h2 className="mb-20">Add New Car to the Market</h2>
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

          {/* ---COLOR--- */}
          <div className="row-start gap-20 wrap">
            {lights.map((v, i) => (
              <div className="column-start gap-10" key={i}>
                <label className="bold">
                  <input
                    onChange={() => handleCheckbox(v)}
                    type="checkbox"
                    style={{ marginRight: "5px" }}
                    className="pointer"
                    checked={!!check[color]}
                  />
                  {v}
                </label>
                {check[v] && (
                  <div className="row-start wrap gap-20">
                    {createCarInput.map((c, ind) => (
                      <input
                        key={ind}
                        className="car-position-input"
                        placeholder={`${c}${v} Car`}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="center">
              <input
                onChange={(e) => setColour(e.target.value)}
                className="add-color-input"
                placeholder="Type Color"
              />
              <button onClick={handlecolors} className="add-color-button">
                Add
              </button>
            </div>
          </div>
          {/* ---COLOR--- */}

          {/* ------BUTTON---- */}
          <button
            onClick={handleAddProduct}
            className="button-common-style w-full add-btn bg-add-btn white"
          >
            {/* <Link style={{ textDecoration: "none", color: "white" }} to="/"> */}
            Add
            {/* </Link> */}
          </button>
          {/* ------BUTTON---- */}
        </div>
      </div>
    </div>
  );
};

export default Create;
