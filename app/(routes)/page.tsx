import { Suspense } from "react";
import { Hydrate, Products } from "../_components";
import { useHydrate } from "../_hooks/useHydrate";
import { fetchProducts } from "../_services";

export default async function Home() {
  const { prefetchData } = useHydrate({
    queryKey: ["hydrate-products"],
    queryFn: fetchProducts,
  });
  const dehydratedState = await prefetchData();

  return (
    <main className="min-h-screen p-2">
      <Hydrate state={dehydratedState}>
        <Suspense fallback="...loading">
          <Products />
        </Suspense>
      </Hydrate>
    </main>
  );
}
