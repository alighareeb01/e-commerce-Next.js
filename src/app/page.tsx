import Allproducts from "./_components/Allproducts/page";
import { fetchAllProducts } from "./_api/fetchProd";

export default async function Home() {
  const product = await fetchAllProducts();

  return <Allproducts product={product} />;
}
