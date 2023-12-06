"use client";

import { fetchProducts } from "@/app/services";
import { useSuspenseQuery } from "@tanstack/react-query";
import { BaseSwiper, BaseSwiperSlider } from "../Base";
import "./assets/styles.css";
import { ProductListItem } from "./components/ProductListItem";

export const Products = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["hydrate-products"],
    queryFn: () => fetchProducts(),
  });

  return (
    <div className="mt-4">
      <BaseSwiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        className="w-11/12 h-80 border-solid border-2 border-gray-100 rounded-md max-w-2xl"
      >
        {data.map(({ id, image, title }) => (
          <BaseSwiperSlider key={id}>
            <ProductListItem id={id} image={image} title={title} />
          </BaseSwiperSlider>
        ))}
      </BaseSwiper>
    </div>
  );
};
