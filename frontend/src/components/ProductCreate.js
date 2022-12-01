import React from "react";
import { Link } from "react-router-dom";

const ProductCreate = () => {
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container">
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h4 style={{ textAlign: "center", marginTop: "2px" }}>
                  Add Product
                </h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12 col-xs-6">
                    <div className="form-group">
                      <label>Name</label>
                      <input className="form-control"></input>
                    </div>
                  </div>

                  <div className="col-lg-12 col-xs-6">
                    <div className="form-group">
                      <label>Category</label>
                      <input className="form-control"></input>
                    </div>
                  </div>

                  <div className="col-lg-12 col-xs-6">
                    <div className="form-group">
                      <label>Description</label>
                      <textarea
                        rows={5}
                        cols={40}
                        className="form-control"
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-lg-12 col-xs-6">
                    <div className="form-group">
                      <label>Created By</label>
                      <input className="form-control"></input>
                    </div>
                  </div>

                  <div className="col-lg-12 col-xs-6">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                      ></input>
                      <label className="form-check-label">In Stock</label>
                    </div>
                  </div>

                  <div>
                    <div className="form-group">
                      <label>Created at ----</label>
                      {new Date().toLocaleDateString()}
                    </div>
                  </div>
                  <div className="col-lg-12 col-xs-6">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Add
                      </button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
