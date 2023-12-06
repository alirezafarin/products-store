import { RightArrowIcon } from "@/app/_assets/ts";
import { en } from "@/app/_dictionary/en";

export const ProductListItemOverlay = () => {
  return (
    <div className="absolute z-10 w-full h-full hover:bg-gray-800 opacity-0 hover:opacity-80 flex justify-center items-center flex flex-col">
      <p className="text-white">{en.seeProductDetails}</p>
      <RightArrowIcon />
    </div>
  );
};
