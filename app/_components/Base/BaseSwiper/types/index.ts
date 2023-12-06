import { ReactNode } from "react";
import { SwiperProps } from "swiper/react";

export interface IBaseSwiper extends SwiperProps {
  children: ReactNode[];
}
