import { IProduct } from "./types";

export async function fetchProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  const products = (await res.json()) as IProduct[];
  return products;
}
