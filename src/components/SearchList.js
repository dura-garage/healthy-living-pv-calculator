import React from "react";
import Catalogue from "./Catalogue";
import ProductItem from "./ProductItem";

export default function SearchList(props) {
  const { result } = props;

  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "50px" }}
      >
        <Catalogue />
        <div className="search-list col-10">
          <h1 className="text-center">Search Results</h1>
          <div className="container">
            <div className="row">
              {result.map((e) => {
                return <ProductItem key={e.pCode} e={e} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
