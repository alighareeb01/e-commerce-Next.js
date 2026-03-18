import ProductCard from "../_components/ProductCard/page";
export default async function shop() {
  let prod = [];
  const data = await fetch("https://nti-ecommerce.vercel.app/api/v1/products");
  const res = await data.json();
  prod = res.Products;
  console.log(prod);

  // prod = res;

  return (
    <div className="min-h-screen bg-slate-950 py-8 text-slate-100">
      <div className="container mx-auto px-4">
        <h1 className="my-6 text-center text-3xl font-bold tracking-tight text-cyan-200">
          Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6">
          {prod.map((el, index) => {
            return <ProductCard key={el._id ?? index} product={el} />;
          })}
        </div>
      </div>
    </div>
  );
}
