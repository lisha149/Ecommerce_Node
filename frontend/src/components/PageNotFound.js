import React from "react";
import { Link } from "react-router-dom";
import NotFoundImage from "../assets/404.svg";

const PageNotFound = () => {
  return (
    <main>
      <section className="vh-100 d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row">
            <div
              className="col text-center d-flex align-items-center justify-content-center"
              xs={12}
            >
              <div>
                <div className="card-link" as={Link} to="/">
                  <img src={NotFoundImage} className="img-fluid w-75" />
                </div>
                <h1 className="text-dark mt-5">
                  Page not <span className="fw-bolder">found</span>
                </h1>
                <p className="lead my-4">
                  Oops! Looks like you followed a bad link. If you think this is
                  a problem with us, please tell us.
                </p>
                <Link to="/" className="btn btn-success">
                  <div className=" me-3 ms-2">Go back home</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PageNotFound;
