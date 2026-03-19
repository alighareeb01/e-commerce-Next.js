import { fetchAllProducts } from "../_api/fetchProd";
import Allproducts from "../_components/Allproducts/page";
import ProductCard from "../_components/ProductCard/page";
export default async function shop() {
  const product = await fetchAllProducts();

  return <Allproducts product={product} />;
}
