import { Suspense } from "react";
import { Hydrate, LoadingComponent, Products } from "../_components";
import { useHydrate } from "../_hooks/useHydrate";
import { fetchProducts } from "../_services";
import { queryKeys } from "../_constants";

export const revalidate = 600;

export default async function Home() {
  const { prefetchData } = useHydrate({
    queryKey: [queryKeys.fetchProduct],
    queryFn: fetchProducts,
  });
  const dehydratedState = await prefetchData();

  return (
    <main className="min-h-screen p-2">
      <Hydrate state={dehydratedState}>
        <Suspense fallback={<LoadingComponent />}>
          <Products />
        </Suspense>
      </Hydrate>
    </main>
  );
}
