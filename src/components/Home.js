import React from "react";
import { data } from "../healthyLivingPVCalculator";
import Catalogue from "./Catalogue";
import ProductItem from "./ProductItem";

export default function Home(props) {
  const { category, result } = props;
  const newData = data.filter((e) => {  
    if (category !== "all" && e.pCategory !== category) return null;
    return e;
  });


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "50px" }}
      >
        <Catalogue />

        {result && (
          <div className="search-list col-10">
            <h1 className="text-center">Search Results ({result.length})</h1>
            <div className="container">
              <div className="row">
                {result.map((e) => {
                  return <ProductItem key={e.pCode} e={e} />;
                })}
              </div>
            </div>
          </div>
        )}
        {!result && (
          <div className="home col-10">
            <h1 className="text-center">
              {capitalizeFirstLetter(category)} Products ({newData.length})
            </h1>
            <div className="container">
              <div className="row">
                {newData.map((e) => {
                  return <ProductItem key={e.pCode} e={e} />;
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
