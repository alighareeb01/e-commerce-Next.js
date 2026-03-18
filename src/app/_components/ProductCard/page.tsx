"use client";
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

export default function ProductCard({ product }: ProductType) {
  return (
    <Card className="relative mx-auto w-full max-w-sm border border-cyan-400/20 bg-slate-950 pt-0 text-slate-100 shadow-lg shadow-black/30">
      <div className="absolute inset-0 z-30 aspect-video bg-slate-950/30" />
      <img
        src={product.imageCover}
        alt={product.title}
        className="relative z-20 aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardAction>
          <Badge className="text-cyan-300">Featured</Badge>
        </CardAction>
        <CardTitle className="text-cyan-200">{product.title}</CardTitle>
        <CardDescription className="text-slate-300">
          {product.description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="border-cyan-400/20 bg-slate-900/80">
        <Button className="w-full bg-cyan-300 text-slate-950 hover:bg-sky-300">
          View Event
        </Button>
      </CardFooter>
    </Card>
  );
}
