import React from 'react'
import "./create.css"
import {Link} from "react-router-dom"

const Create = () => {
  return (
    <div className="main-common-style center">
      <div className="container-common-style gap-20 center">
        <form className="column-center mt-50 form-style gap-20">
          <h2 className="mb-20">Create New Product</h2>
          <div className="form-group column-center">
            <input type="text" />
            <label>Type the Name of Product</label>
          </div>
          <div className="form-group column-center">
            <input type="text" />
            <label>Type the Price of Product</label>
          </div>
          <div className="form-group column-center">
            <input type="file" />
            <p>Drop Image for Product</p>
          </div>
            <button type="submit" className="button-common-style add-btn">
          <Link style={{textDecoration: "none", color: "white"}} to="/">
              Add
          </Link>
            </button>
        </form>
      </div>
    </div>
  );
}

export default Create