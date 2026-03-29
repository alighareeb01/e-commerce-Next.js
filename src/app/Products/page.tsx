import React from "react";
import Allproducts from "../_components/Allproducts/page";
import { fetchAllProducts } from "../_api/fetchProd";

const product = await fetchAllProducts();

export default function Products() {
  return (
    <>
      <Allproducts product={product} />
    </>
  );
}

