import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [data, setData] = useState();
  const [searchInput, setSearchInput] = useState("");
  console.log(searchInput);
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setData(response);
        // console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Product List</h2>
        </div>
        <div className="card-body">
          <div className="d-inline">
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

          <table className="table table-bordered">
            <thead id="table-head">
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Desription</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data &&
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
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
