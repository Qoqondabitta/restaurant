import React from 'react'
import "./buy.css"
import "../../pages/create/create.css";

const Buy = () => {
  return (
    <div className="column-center absolute bg-white mt-50 form-style gap-20">
      <h2 className="mb-20">Buy This Car</h2>
      <div className="form-group column-center">
        <input
        //   name="name"
        //   value={changedProduct.name}
        //   placeholder={changedProduct.name}
        //   onChange={(e) => {
        //     setChangedProduct({ ...changedProduct, name: e.target.value });
        //   }}
          type="text"
        />
        <label>Card Number</label>
      </div>
      <div className="form-group column-center">
        <input
        //   name="price"
          type="text"
        //   value={changedProduct.price}
        //   placeholder={changedProduct.price}
        //   onChange={(e) => {
        //     setChangedProduct({ ...changedProduct, price: e.target.value });
        //   }}
        />
        <label>Expiration Date</label>
      </div>
      <div className="form-group column-center">
        <input
          type="text"
        //   name="image"
        //   value={changedProduct.image}
        //   placeholder={changedProduct.image}
        //   onChange={(e) => {
        //     setChangedProduct({ ...changedProduct, image: e.target.value });
        //   }}
        />
        <label>Three Digit Security Number</label>
      </div>
      <div className="row-start w-full gap-20">
        <button
          onClick={() => {
            handleEditProduct(product._id, changedProduct);
            setShow(!show);
          }}
          className="button-common-style w-120 add-btn positive-tab white"
        >
          Buy
        </button>
        <button
          onClick={() => setShow(!show)}
          className="button-common-style w-120 add-btn bg-grey white"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Buy