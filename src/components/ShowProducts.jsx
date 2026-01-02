import React, { useContext, useEffect } from "react";
import { Appcontext } from "../context/Appcontext";
import ShowIndividualproduct from "./ShowIndividualproduct";

const ShowProducts = () => {
  const { productData, fetchProducts } = useContext(Appcontext);

  useEffect(() => {
    if (productData.length === 0) {
      fetchProducts();
    }
  }, []);

  return (
    <div>
      {productData.map((item) => (
        <ShowIndividualproduct key={item._id} product={item} />
      ))}
    </div>
  );
};

export default ShowProducts;
