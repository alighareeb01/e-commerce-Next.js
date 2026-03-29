import { fetchAllCategories } from "../_api/fetchCategories";
import { fetchAllProducts } from "../_api/fetchProd";
import Allcategories from "../_components/Allcategories/page";
import Allproducts from "../_components/Allproducts/page";
export default async function shop() {
  const product = await fetchAllProducts();

  const category = await fetchAllCategories();

  return (
    <>
      <Allproducts product={product} />
      <Allcategories category={category} />
    </>
  );
}
