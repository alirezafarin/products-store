import { Suspense } from "react";
import { Hydrate, Products } from "./components";
import { useHydrate } from "./hooks/useHydrate";
import { fetchProducts } from "./services";

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
