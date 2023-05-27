import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/cartContext";
import SearchProduct from "./SearchProduct";

const Navbar = (props) => {
  const cartContext = useContext(CartContext);
  const { totalPValue, totalPrice } = cartContext;
  const { handleSearch } = props;


  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand " to="/">
          Health & Beauty
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/aboutus">
                About Us
              </Link>
            </li>{" "}
            <SearchProduct handleSearch={handleSearch}/>
          </ul>

          <div className="d-flex">
            <button className="btn btn-outline-primary mx-2" disabled>
              Total Cost: {totalPrice}
            </button>
            <button className="btn btn-outline-primary mx-2" disabled>
              Total PV: {Math.round(totalPValue * 100) / 100}
            </button>
            <Link
              className="btn btn-outline-primary mx-2"
              to="/cart"
              role="button"
            >
              My Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
