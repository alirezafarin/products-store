import { FC } from "react";

interface IProductTitleProps {
  title: string;
  description: string;
}

export const ProductDetailTitle: FC<IProductTitleProps> = ({
  title,
  description,
}) => {
  return (
    <div>
      <h1 className="font-bold !text-2xl mb-2">{title}</h1>
      <span className="text-gray-600 text-sm">{description}</span>
    </div>
  );
};
