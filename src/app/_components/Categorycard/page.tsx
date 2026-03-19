import { ProductType } from "@/app/_models/products.type";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "lucide-react";
import React from "react";

type categoryProps = {
  category: CategoryType;
};
export default function Categorycard({ category }: categoryProps) {
  return (
    <Card className="relative mx-auto w-full max-w-sm border border-cyan-400/20 bg-slate-950 pt-0 text-slate-100 shadow-lg shadow-black/30">
      <div className="absolute inset-0 z-30 aspect-video bg-slate-950/30" />
      <img
        src={category.image}
        alt={category.title}
        className="relative z-20 aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardTitle className="text-cyan-200">{category.title}</CardTitle>
        <CardDescription className="text-slate-300">
          {category.title}
        </CardDescription>
      </CardHeader>
      <CardFooter className="border-cyan-400/20 bg-slate-900/80">
        <Button className="w-full bg-cyan-300 text-slate-950 hover:bg-sky-300">
          view Category
        </Button>
      </CardFooter>
    </Card>
  );
}
