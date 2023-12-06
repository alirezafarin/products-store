import { FC, memo } from "react";

interface IProductDetailItem {
  title: string;
  value: string | number;
}

const ProductDetailItem: FC<IProductDetailItem> = ({ title, value }) => {
  return (
    <div className="flex justify-between items-center border-solid border-b-2 border-gray-100 p-1 last:border-b-0">
      <span className="font-bold">{title}</span>
      <span className="text-primary">{value}</span>
    </div>
  );
};

export default memo(ProductDetailItem);
