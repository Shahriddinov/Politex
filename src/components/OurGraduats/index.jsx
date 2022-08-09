/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useTranslation } from "react-i18next";
import CardStudent from "../CardStudent";
import useList from "../../modules/hooks/useGranduates";

const OurGraduats = () => {
  const { items, isLoading } = useList();
  const { t } = useTranslation();

  return (
    <section className="py-14">
      <div className="responsive">
        <div className="flex justify-between items-end w-full border-b">
          <h2 className="md:text-2xl text-base mb-0">{t("our_granduates")}</h2>
        </div>
      </div>
      <div className="responsive">
        <div className=" mt-5">
          {isLoading ? (
            <h2>{t("loading")}</h2>
          ) : (
            <Swiper
              modules={[Autoplay]}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40
                }
              }}
              loop
              autoplay={{
                delay: 3000,
                disableOnInteraction: false
              }}
              spaceBetween={50}
              slidesPerView={1}
            >
              {Array.isArray(items) &&
                items.map(item => (
                  <SwiperSlide key={item.id}>
                    <CardStudent item={item} />
                  </SwiperSlide>
                ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurGraduats;
