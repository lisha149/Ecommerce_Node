import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(4);

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

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
        // console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderData = (data) => {
    return (
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
                    <a href={`/product/${item.id}`} className="btn btn-success">
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
              ))}
        </tbody>
      </table>
    );
  };

  const handleClick = (e) => {
    setcurrentPage(Number(e.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage == number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });
  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

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
          {renderData(currentItems)}
          <ul className="pageNumbers">
            <li>
              <button
                onClick={handlePrevbtn}
                disabled={currentPage == pages[0] ? true : false}
              >
                Prev
              </button>
            </li>
            {pageDecrementBtn}
            {renderPageNumbers}
            {pageIncrementBtn}

            <li>
              <button
                onClick={handleNextbtn}
                disabled={currentPage == pages[pages.length - 1] ? true : false}
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
