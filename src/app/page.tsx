import Allproducts from "./_components/Allproducts/page";
import { fetchAllProducts } from "./_api/fetchProd";

export default async function Home() {
  const product = await fetchAllProducts();

  return (
    <>
      <section className="py-10 text-[#3f2417]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[#4a2d1e] sm:text-5xl">
            Welcome to Our Shop 🍫
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-sm leading-7 text-[#7b5843] sm:text-base">
            Discover a curated collection of high-quality products designed to
            fit your everyday needs. From stylish essentials to unique finds, we
            bring you items that combine quality, value, and taste.
          </p>

          <p className="mt-3 max-w-2xl mx-auto text-sm leading-7 text-[#7b5843] sm:text-base">
            Whether you're shopping for yourself or looking for the perfect
            gift, we’re here to make your experience simple and enjoyable.
          </p>
        </div>
      </section>
      <div className="min-h-screen bg-[linear-gradient(180deg,#fff8f0_0%,#f6eadf_52%,#efddcf_100%)] text-[#3f2417]">
        <Allproducts product={product} />
      </div>
    </>
  );
}
