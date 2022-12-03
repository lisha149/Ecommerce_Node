import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ProductUpdate = () => {
  const { id } = useParams();
  //   console.log(id);
  const [pid, setId] = useState("");
  const [product_name, setName] = useState("");
  const [category_name, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [created_by, setCreatedBy] = useState("");
  const [status, setStatus] = useState("In stock");

  const date = new Date();

  const [created_at, setCreatedAt] = useState();
  const [updated_at, setUpdatedAt] = useState(date.toISOString());

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
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    };

    fetch(`http://localhost:5000/api/products/${id}`, options)
      .then((res) => {
        alert("Product Updated Successfully.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setId(response.id);
        setName(response.product_name);
        setCategory(response.category_name);
        setCreatedBy(response.created_by);
        setCreatedAt(response.created_at);
        setDescription(response.description);
        setStatus(response.status);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={submitHandler}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h4 style={{ textAlign: "center", marginTop: "2px" }}>
                  Edit Product
                </h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12 col-xs-6">
                    <div className="form-group">
                      <label>Code</label>
                      <input
                        className="form-control"
                        value={pid}
                        disabled
                        // onChange={(e) => setId(e.target.value)}
                      ></input>
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
                      <label>Updated at ----</label>
                      {new Date().toLocaleDateString()}
                    </div>
                  </div>
                  <div className="col-lg-12 col-xs-6">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Update
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

export default ProductUpdate;
