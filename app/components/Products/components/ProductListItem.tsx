"use client";

import { IProduct } from "@/app/services/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export interface IProductListItem
  extends Pick<IProduct, "id" | "image" | "title"> {}

export const ProductListItem: FC<IProductListItem> = ({ id, image, title }) => {
  return (
    <Link
      className="flex flex-col items-center justify-between"
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
    </Link>
  );
};
