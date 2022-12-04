import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  // console.log(searchInput);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      let options = {
        method: "Delete",
      };
      fetch(`http://localhost:5000/api/products/${id}`, options)
        .then((res) => {
          alert("Product Deleted Successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setData(response);
        // console.log(response)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h2>Product List</h2>
        </div>
        <div className="card-body">
          <div className="btn-search">
            <div className="leftbtn">
              <Link to="products/create" className="btn btn-success">
                Add new product (+)
              </Link>
              {/* <hr /> */}
            </div>
            <div className="search d-flex form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search by name/category"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
          </div>

          <table className="table table-bordered table-striped">
            <thead className="text-dark-md bkg-light">
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Description</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data &&
              data.filter(
                (data) =>
                  data.product_name
                    .toLowerCase()
                    .includes(searchInput.toLowerCase()) ||
                  data.category_name
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
              ).length == 0 ? (
                <tr>
                  <td colSpan={8} className="text-center mb-0">
                    ---------No Product Found---------
                  </td>
                </tr>
              ) : (
                data
                  .filter(
                    (data) =>
                      data.product_name
                        .toLowerCase()
                        .includes(searchInput.toLowerCase()) ||
                      data.category_name
                        .toLowerCase()
                        .includes(searchInput.toLowerCase())
                  )
                  .map((item) => (
                    <tr key={item.id}>
                      <td data-label="Name">{item.product_name}</td>
                      <td data-label="Category">{item.category_name}</td>
                      <td data-label="Description">{item.description}</td>
                      <td data-label="Status">{item.status}</td>
                      <td data-label="Actions">
                        <a
                          href={`/product/${item.id}`}
                          className="btn btn-success"
                        >
                          Edit
                        </a>
                        <a
                          className="btn btn-danger"
                          onClick={() => deleteHandler(item.id)}
                          href="#"
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
