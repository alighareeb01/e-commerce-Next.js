import React from "react";

type detProps = {
  searchParams: Promise<{
    productId: string;
  }>;
};

type ProductDetailsType = {
  _id: string;
  name: string;
  description: string;
  cover: string;
  images: string[];
  price: number;
  quantity: number;
  sold: number;
  ratingAverage: number;
  ratingCount: number;
  createdAt: string;
  updatedAt: string;
  category: {
    _id: string;
    name: string;
  };
  subcategory: {
    _id: string;
    name: string;
    category: {
      _id: string;
      name: string;
    };
  };
};

type ProductDetailsResponse = {
  data: ProductDetailsType;
};

export default async function ProductDetails({ searchParams }: detProps) {
  const { productId } = await searchParams;

  const res = await fetch(
    `https://nti-e-commerce-backend-project.vercel.app/api/v1/product/${productId}`,
    {
      method: "GET",
    },
  );
  const result: ProductDetailsResponse = await res.json();
  const product = result.data;

  return (
    <section className="min-h-screen bg-[linear-gradient(180deg,#fff8f0_0%,#f6eadf_52%,#efddcf_100%)] px-4 py-10 text-[#3f2417]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <div className="overflow-hidden rounded-[2rem] border border-[#7a5036]/12 bg-[rgba(255,248,240,0.9)] shadow-[0_20px_60px_rgba(90,53,35,0.08)]">
              <img
                src="/def.jpg"
                alt={product.name}
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {product.images.map((image, index) => (
                <div
                  key={`${product._id}-${index}`}
                  className="overflow-hidden rounded-[1.5rem] border border-[#7a5036]/12 bg-[rgba(255,248,240,0.88)] shadow-[0_10px_30px_rgba(90,53,35,0.08)]"
                >
                  <img
                    src="/def.jpg"
                    alt={`${product.name} ${index + 1}`}
                    className="h-32 w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#7a5036]/12 bg-[rgba(255,248,240,0.88)] p-6 shadow-[0_20px_60px_rgba(90,53,35,0.08)] sm:p-8">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-[#f3e3d4] px-4 py-2 text-sm font-medium text-[#6d432d]">
                {product.category.name}
              </span>
              <span className="rounded-full bg-[#f7ede4] px-4 py-2 text-sm font-medium text-[#7b5843]">
                {product.subcategory.name}
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-[#4a2d1e]">
              {product.name}
            </h1>

            <p className="mt-4 text-base leading-8 text-[#7b5843]">
              {product.description}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#fff5eb] p-4">
                <p className="text-sm text-[#7b5843]">Price</p>
                <p className="mt-1 text-3xl font-bold text-[#4a2d1e]">
                  ${product.price}
                </p>
              </div>

              <div className="rounded-2xl bg-[#fff5eb] p-4">
                <p className="text-sm text-[#7b5843]">Available Quantity</p>
                <p className="mt-1 text-3xl font-bold text-[#4a2d1e]">
                  {product.quantity}
                </p>
              </div>

              <div className="rounded-2xl bg-[#fff5eb] p-4">
                <p className="text-sm text-[#7b5843]">Sold</p>
                <p className="mt-1 text-3xl font-bold text-[#4a2d1e]">
                  {product.sold}
                </p>
              </div>

              <div className="rounded-2xl bg-[#fff5eb] p-4">
                <p className="text-sm text-[#7b5843]">Rating</p>
                <p className="mt-1 text-3xl font-bold text-[#4a2d1e]">
                  {product.ratingAverage}
                  <span className="ml-2 text-sm font-medium text-[#7b5843]">
                    ({product.ratingCount} review
                    {product.ratingCount === 1 ? "" : "s"})
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-[1.75rem] border border-[#7a5036]/10 bg-[#fff5eb] p-5">
              <h2 className="text-lg font-semibold text-[#4a2d1e]">
                Product Info
              </h2>
              <div className="mt-4 space-y-3 text-sm text-[#7b5843]">
                <p>
                  <span className="font-semibold text-[#4a2d1e]">
                    Product ID:
                  </span>{" "}
                  {product._id}
                </p>
                <p>
                  <span className="font-semibold text-[#4a2d1e]">
                    Created At:
                  </span>{" "}
                  {new Date(product.createdAt).toLocaleString()}
                </p>
                <p>
                  <span className="font-semibold text-[#4a2d1e]">
                    Updated At:
                  </span>{" "}
                  {new Date(product.updatedAt).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
