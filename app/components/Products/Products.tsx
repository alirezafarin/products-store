"use client";

import { fetchProducts } from "@/app/services";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Products = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["hydrate-products"],
    queryFn: () => fetchProducts(),
  });

  console.log(data, "data");

  return <div>Products</div>;
};
