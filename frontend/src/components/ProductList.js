import React, { useEffect, useState } from "react";

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
          <table className="table table-bordered">
            <thead>
              <tr>
                <td>Name</td>
                <td>Category</td>
                <td>Desription</td>
                <td>Status</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.product_name}</td>
                    <td>{item.category_name}</td>
                    <td>{item.description}</td>
                    <td>{item.status}</td>
                    <td>
                      <a className="btn btn-success">Edit</a>
                      <a className="btn btn-danger">Remove</a>
                    </td>
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
