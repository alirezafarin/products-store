import { FC } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import { IBaseSwiper } from "./types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./assets/baseSwiperStyles.css";

export const BaseSwiper: FC<IBaseSwiper> = ({ children, ...props }) => {
  return (
    <Swiper {...props} modules={[Autoplay, Pagination, Navigation]}>
      {children}
    </Swiper>
  );
};
