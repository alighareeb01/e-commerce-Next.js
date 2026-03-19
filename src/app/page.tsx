import Allproducts from "./_components/Allproducts/page";
import { fetchAllProducts } from "./_api/fetchProd";

export default async function Home() {
  const product = await fetchAllProducts();

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fff8f0_0%,#f6eadf_52%,#efddcf_100%)] text-[#3f2417]">
      <Allproducts product={product} />
    </div>
  );
}
