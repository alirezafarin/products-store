"use client";

import Image from "next/image";
import { BaseRatings } from "../Base";
import { ProductDetailList, ProductDetailTitle } from "./components";
import { LikeButton } from "./components/LikeButton";
import { useProductDetails } from "./hooks";

export const ProductDetail = () => {
  const { description, image, category, price, title, rating } =
    useProductDetails();

  return (
    <div className="max-w-4xl mx-auto border-solid border-2 border-gray-100 rounded-md flex sm:flex-row px-2 py-2 flex-col gap-2">
      <div className="sm:w-2/4 w-full flex justify-center items-center">
        <Image
          className="max-h-[300px] object-contain"
          src={image}
          width={300}
          height={300}
          alt={title}
        />
      </div>
      <div className="sm:w-2/4 w-full">
        <ProductDetailTitle title={title} description={description} />
        <div className="my-1 flex justify-between items-center">
          <BaseRatings rating={rating} />
          <LikeButton />
        </div>
        <ProductDetailList category={category} price={price} />
      </div>
    </div>
  );
};
