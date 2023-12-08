import { en } from "@/app/_dictionary/en";
import { FC } from "react";
import { ProductDetailItem } from ".";
import { IProduct } from "@/app/_services/types";

export const ProductDetailList: FC<Pick<IProduct, "price" | "category">> = ({
  category,
  price,
}) => {
  const productDetailItems = [
    { id: 0, title: en.price, value: `${price}$` },
    { id: 1, title: en.category, value: category },
  ];

  return (
    <div className="mt-3">
      {productDetailItems.map(({ id, title, value }) => (
        <ProductDetailItem key={id} title={title} value={value} />
      ))}
    </div>
  );
};
