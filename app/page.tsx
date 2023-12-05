import { Suspense } from "react";
import { Hydrate, Products } from "./components";
import { getQueryClient } from "./utils";
import { dehydrate } from "@tanstack/react-query";
import { fetchProducts } from "./services";

export default async function Home() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["hydrate-products"],
    queryFn: fetchProducts,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <main className="min-h-screen p-24">
      <Hydrate state={dehydratedState}>
        <Products />
      </Hydrate>
    </main>
  );
}
