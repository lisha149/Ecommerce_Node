import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [data, dataChange] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        dataChange(response);
        // console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //   console.log(data);
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Product List</h2>
        </div>
        <div className="card-body">
          <div className="leftbtn">
            <Link to="products/create" className="btn btn-success btn-sm">
              Add new product (+)
            </Link>
            <hr />
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
                data.map((item) => (
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
