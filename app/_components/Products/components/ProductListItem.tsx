"use client";

import { IProduct } from "@/app/_services/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { ProductListItemOverlay } from "./ProductListItemOverlay";
import { LikeButton } from "../../ProductDetail/components/LikeButton";

export interface IProductListItem
  extends Pick<IProduct, "id" | "image" | "title"> {}

export const ProductListItem: FC<IProductListItem> = ({ id, image, title }) => {
  return (
    <div className="w-full h-full cursor-pointer relative">
      <Link
        className="flex flex-col items-center justify-center w-full h-full"
        href={`/product/${id}`}
      >
        <Image
          src={image}
          width={200}
          height={300}
          alt={title}
          className="rounded-md"
        />
        <h4 className="mt-2">{title}</h4>
        <ProductListItemOverlay />
      </Link>
      <div className="absolute z-20 left-0 top-0">
        <LikeButton defaultId={String(id)} />
      </div>
    </div>
  );
};
