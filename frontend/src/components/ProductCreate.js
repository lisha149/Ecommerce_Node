import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductCreate = () => {
  const [id, setId] = useState("");
  const [product_name, setName] = useState("");
  const [category_name, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [created_by, setCreatedBy] = useState("");
  const [status, setStatus] = useState("In stock");

  const date = new Date();

  const [created_at, setCreatedAt] = useState(date.toISOString());
  const [updated_at, setUpdatedAt] = useState(date.toISOString());
  const [validation, setValidation] = useState(false);

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      id,
      product_name,
      category_name,
      description,
      created_by,
      status,
      created_at,
      updated_at,
    };
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    };

    fetch("http://localhost:5000/api/products/create", options)
      .then((res) => {
        alert("Product Added Successfully.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={submitHandler}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-header">
                <h4 style={{ textAlign: "center", marginTop: "2px" }}>
                  Add Product
                </h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12 col-xs-6">
                    <div className="form-group">
                      <label>Code</label>
                      <input
                        className="form-control"
                        value={id}
                        required
                        onMouseDown={(e) => setValidation(true)}
                        onChange={(e) => setId(e.target.value)}
                      ></input>
                      {id.length === 0 && validation && (
                        <span className="text-danger">
                          Enter the product code
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12 col-xs-6">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        className="form-control"
                        required
                        value={product_name}
                        onChange={(e) => setName(e.target.value)}
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12 col-xs-6">
                    <div className="form-group">
                      <label>Category</label>
                      <input
                        className="form-control"
                        value={category_name}
                        required
                        onChange={(e) => setCategory(e.target.value)}
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12 col-xs-6">
                    <div className="form-group">
                      <label>Description</label>
                      <textarea
                        rows={5}
                        cols={40}
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-lg-12 col-xs-6">
                    <div className="form-group">
                      <label>Created By</label>
                      <input
                        className="form-control"
                        value={created_by}
                        onChange={(e) => setCreatedBy(e.target.value)}
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12 col-xs-6">
                    <div className="form-check">
                      Status
                      <input
                        type="radio"
                        id="status"
                        name="status"
                        value="In stock"
                        style={{ marginLeft: 7 }}
                        checked={status === "In stock"}
                        onChange={(e) => {
                          setStatus(e.target.value);
                        }}
                      />
                      <label style={{ marginLeft: 2 }}>In Stock</label>
                      <input
                        type="radio"
                        id="status"
                        name="status"
                        value="Out of stock"
                        style={{ marginLeft: 10 }}
                        checked={status === "Out of stock"}
                        onChange={(e) => {
                          setStatus(e.target.value);
                        }}
                      />
                      <label style={{ marginLeft: 2 }}>Out of Stock</label>
                      <br />
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
