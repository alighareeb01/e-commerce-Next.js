import React from "react";
import Categorycard from "../Categorycard/page";
import { CategoryType } from "@/app/_models/category.type";

type categoryProps = {
  category: CategoryType;
};

export default function Allcategories({ category }: categoryProps) {
  return (
    <div>
      <div className="min-h-screen bg-slate-950 py-8 text-slate-100">
        <div className="container mx-auto px-4">
          <h1 className="my-6 text-center text-3xl font-bold tracking-tight text-cyan-200">
            Category
          </h1>

          <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {category.map((el, index: number) => {
              return <Categorycard key={el._id ?? index} category={el} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
