import { fetchAllProducts } from "../_api/fetchProd";
import Allproducts from "../_components/Allproducts/page";
export default async function shop() {
  const product = await fetchAllProducts();

  return <Allproducts product={product} />;
}
