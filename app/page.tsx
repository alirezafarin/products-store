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
    <main className="min-h-screen p-24">
      <Hydrate state={dehydratedState}>
        <Products />
      </Hydrate>
    </main>
  );
}
