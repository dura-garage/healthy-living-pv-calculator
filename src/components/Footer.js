import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer className="page-footer font-small blue">
        {/* <!-- Copyright --> */}
        <div className="footer-copyright text-center py-3">
          © 2023 Copyright:
          <Link
            className=" text-decoration-none text-dark font-weight-bold  "
            to="/"
          >
            {" "}
            mycompany.com
          </Link>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </>
  );
}
