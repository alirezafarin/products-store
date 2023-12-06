import { StarIcon } from "@/app/_assets/ts";
import { en } from "@/app/_dictionary/en";
import { IProduct } from "@/app/_services/types";
import { FC } from "react";

export const BaseRatings: FC<Pick<IProduct, "rating">> = ({
  rating: { count, rate },
}) => {
  return (
    <div className="flex items-center">
      <StarIcon />
      <p className="ms-2 text-sm font-bold text-gray-900 text-dark">{rate}</p>
      <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
      <p className="text-sm font-medium text-gray-900 underline hover:no-underline text-dark">
        {count} {en.reviews}
      </p>
    </div>
  );
};
