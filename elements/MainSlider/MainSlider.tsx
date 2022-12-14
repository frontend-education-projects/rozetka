import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";
import { SliderPhotoMassive } from "@/pages/api/data/SliderPhotosMassive";
import Link from "next/link";

type SliderPhotoProp = {
  id: number;
  picture: string;
  pathPicture: string;
};

export const MainSlider = () => {
  return (
    <>
      <Swiper
        rewind={true}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {SliderPhotoMassive.map(
          ({ id, picture, pathPicture }: SliderPhotoProp) => (
            <SwiperSlide key={id}>
              <Link href={`${pathPicture}`}>
                <Image
                  width={1200}
                  height={400}
                  alt="slide"
                  placeholder="empty"
                  src={`/sliderImg/${picture}.jpg`}
                />
              </Link>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </>
  );
};

export default MainSlider;
