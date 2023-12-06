import { Hydrate, LoadingComponent, ProductDetail } from "@/app/_components";
import { queryKeys } from "@/app/_constants";
import { useHydrate } from "@/app/_hooks/useHydrate";
import { fetchProductDetails } from "@/app/_services";
import { Suspense } from "react";

interface IProductPage {
  params: { id: string };
}

export default async function ProductPage({ params }: IProductPage) {
  const { prefetchData } = useHydrate({
    queryKey: [queryKeys.fetchProductDetails, params.id],
    queryFn: () => fetchProductDetails(params.id),
  });
  const dehydratedState = await prefetchData();

  return (
    <main className="min-h-screen p-2">
      <Hydrate state={dehydratedState}>
        <Suspense fallback={<LoadingComponent />}>
          <ProductDetail />
        </Suspense>
      </Hydrate>
    </main>
  );
}
