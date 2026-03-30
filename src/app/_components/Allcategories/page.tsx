import React from "react";
import Categorycard from "../Categorycard/page";
import { CategoryType } from "@/app/_models/category.type";

type CategoryItem = CategoryType & {
  title: string;
  name?: string;
  image?: string | File | Array<string | File>;
};

type CategoryProps = {
  category: CategoryItem[];
};

const localImages = [
  "/cat-1.jpg",
  "/cat-2.jpg",
  "/cat-3.jpg",
  "/cat-4.jpg",
  "/cat-5.jpg",
];
export default function Allcategories({ category }: CategoryProps) {
  return (
    <section className="py-4 pb-10 text-[#3f2417]">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-[2rem] border border-[#7a5036]/12 bg-[rgba(255,248,240,0.78)] p-6 shadow-[0_20px_60px_rgba(90,53,35,0.08)] backdrop-blur-xl sm:p-8">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-[#4a2d1e] sm:text-5xl">
                categories
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#7b5843] sm:text-base">
                Discover our categories
              </p>
            </div>

            <div className="rounded-2xl border border-[#7a5036]/12 bg-[rgba(255,248,240,0.9)] p-5 shadow-[0_10px_30px_rgba(90,53,35,0.08)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(90,53,35,0.12)]">
              <h2 className="text-lg font-semibold text-[#7b5843]">
                Total categories
              </h2>

              <p className="mt-2 text-3xl font-bold text-[#4a2d1e]">
                {category.length}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {category.map((el, index: number) => {
              return (
                <Categorycard
                  key={el._id ?? index}
                  category={el}
                  image={localImages[index]}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
