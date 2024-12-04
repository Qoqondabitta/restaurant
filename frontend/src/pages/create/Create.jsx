import React from 'react'
import "./create.css"

const Create = () => {
  return (
    <div className="main-common-style center">
      <div className="container-common-style center">
        <form className="column-center gap-20">
          <div className="form-group">
            <input type="text" />
            <label>Type the Name of Product</label>
          </div>
          <div className="form-group">
            <input type="text" />
            <label>Type the Price of Product</label>
          </div>
          <div className="form-group">
            <input type="file" />
            <label>Drop Image for Product</label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create