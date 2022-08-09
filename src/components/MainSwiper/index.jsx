/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React, { useTransition } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import { useTranslation } from "react-i18next";
import Button from "../Button";
import useList from "../../modules/hooks/useSwiper";
import config from "../../config";

const MainSwiper = () => {
  const { items } = useList();
  const { i18n } = useTranslation();

  return (
    <div
      style={{
        background:
          "url(https://images.unsplash.com/photo-1653931565039-c500acbb31d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)"
      }}
      className="bg-center bg-cover"
    >
      <div className="py-[60px] bg-opacity-80 bg-white">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="slide"
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          spaceBetween={50}
          slidesPerView={1}
        >
          {Array.isArray(items) &&
            items.map(item => (
              <SwiperSlide>
                <div className="grid sm:grid-cols-2 grid-cols-1 justify-between items-center">
                  <div className="sm:hidden block">
                    <img height={600} className="object-cover object-center rounded-lg shadow-lg" src={`${config.api.base_url}/storage/${item?.img}`} />
                  </div>
                  <div className="flex flex-col items-center justify-center w-[450px] mx-auto">
                    <h1 className="md:text-2xl text-lg sm:text-start text-center font-bold">{item?.name[i18n.language]}</h1>
                    <p className="md:text-base sm:text-start text-center">{item?.content[i18n.language]}</p>
                    <div className="flex justify-end items-end w-full gap-10">
                      <Button className="px-5 py-1" title="Batafsil" />
                    </div>
                  </div>
                  <div className="sm:block hidden ">
                    <img className="object-cover object-center rounded-lg shadow-lg h-full w-full" src={`${config.api.base_url}/storage/${item?.img}`} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MainSwiper;
