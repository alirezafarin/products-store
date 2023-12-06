import { IProduct } from "./types";

export async function fetchProductDetails(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
  const productDetails = (await res.json()) as IProduct;
  return productDetails;
}
