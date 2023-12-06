import { FC } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IBaseSwiper } from "./types";

export const BaseSwiper: FC<IBaseSwiper> = ({ children, ...props }) => {
  return (
    <Swiper {...props} modules={[Autoplay, Pagination, Navigation]}>
      {children}
    </Swiper>
  );
};
