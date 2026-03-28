import { CategoryType } from "@/app/_models/category.type";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

type categoryProps = {
  category: CategoryType;
};

export default function Categorycard({ category }: categoryProps) {
  return (
    <Card className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[1.75rem] border border-[#7a5036]/12 bg-[rgba(255,248,240,0.92)] pt-0 text-[#3f2417] shadow-[0_18px_40px_rgba(90,53,35,0.1)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_55px_rgba(90,53,35,0.15)] flex flex-col h-full">
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#4a2d1e]/55 via-transparent to-transparent opacity-80" />

      <img
        src="/def.jpg"
        alt={category.name}
        className="relative aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <CardHeader className="relative z-20 gap-3 px-5 pt-5 flex-grow">
        <CardTitle className="text-2xl font-bold tracking-tight text-[#4a2d1e]">
          {category.name}
        </CardTitle>

        <CardDescription className="text-sm leading-7 text-[#7b5843] line-clamp-2">
          {category.name}
        </CardDescription>
      </CardHeader>

      <CardFooter className="relative z-20 border-t border-[#7a5036]/10 bg-[rgba(246,230,214,0.72)] p-5 mt-auto">
        <Button className="h-11 w-full rounded-full border border-[#7a5036]/10 bg-[#6d432d] text-[#fff5eb] shadow-[0_12px_24px_rgba(90,53,35,0.16)] transition-all hover:-translate-y-0.5 hover:bg-[#7b4f36]">
          View Category
        </Button>
      </CardFooter>
    </Card>
  );
}
