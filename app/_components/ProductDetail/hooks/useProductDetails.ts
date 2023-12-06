import { queryKeys } from "@/app/_constants";
import { en } from "@/app/_dictionary/en";
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

  const productDetailItems = [
    { id: 0, title: en.price, value: `${price}$` },
    { id: 1, title: en.category, value: category },
  ];

  return { image, title, description, productDetailItems, rating };
};
