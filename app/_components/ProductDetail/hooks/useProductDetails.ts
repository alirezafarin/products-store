import { queryKeys } from "@/app/_constants";
import { fetchProductDetails } from "@/app/_services";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export const useProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: { image, title, category, description, price, rating },
  } = useSuspenseQuery({
    queryKey: [queryKeys.fetchProductDetails, id],
    queryFn: () => fetchProductDetails(id),
  });

  return { image, title, description, rating, category, price };
};
