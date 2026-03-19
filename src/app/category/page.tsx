import React from "react";
import Allcategories from "../_components/Allcategories/page";
import { fetchAllCategories } from "../_api/fetchCategories";

export default async function Category() {
  const category = await fetchAllCategories();
  console.log(category);

  return <Allcategories category={category} />;
}
