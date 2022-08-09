/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
import { get } from "lodash";
import UsifulLinks from "../../../components/UsifulLinksSwiper";
import HeaderImg from "../../../components/HeaderImg";
import HistoryCard from "../../../components/HistoryCard";
import useHistory from "../../../modules/hooks/useHistory";
import config from "../../../config";
import useList from "../../../modules/hooks/useGranduates";

const HistoryUniversity = () => {
  const { t, i18n } = useTranslation();
  const { item } = useHistory();
  const [switcher, setSwitcher] = useState(false);
  const { items } = useList();

  return (
    <div>
      <HeaderImg text="history_of_university" />
      <div className="mt-5">
        <div className="responsive border-b">
          <div className="flex items-center justify-center w-fit">
            <div
              onClick={() => setSwitcher(false)}
              className={`${
                !switcher ? "bg-primary_green text-white" : "bg-white"
              } rounded-t-lg  py-2 px-4 shadow cursor-pointer font-semibold lg:w-[400px] w-[200px] flex items-center justify-center duration-300`}
            >
              {t("history_of_university")}
            </div>
            <div
              onClick={() => setSwitcher(true)}
              className={`${
                switcher ? "bg-primary_green text-white" : "bg-white"
              } rounded-t-lg  py-2 px-4 shadow cursor-pointer font-semibold lg:w-[400px] w-[200px] flex items-center justify-center duration-300`}
            >
              {t("famous_graduates")}
            </div>
          </div>
        </div>
        <div className="responsive">
          <div className=" mt-10">
            {!switcher ? (
              <div>
                <div dangerouslySetInnerHTML={{ __html: get(item, `content[${i18n.language}]`) }} className="text-[18px] lg:leading-9 leading-6" />
                <Swiper
                  modules={[EffectFade, Autoplay]}
                  effect="slide"
                  loop
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                  }}
                  spaceBetween={50}
                  slidesPerView={2}
                >
                  {Array.isArray(item?.imgs) &&
                    item?.imgs?.map(item => (
                      <SwiperSlide key={item}>
                        <img
                          width={800}
                          height={480}
                          className="object-cover object-center rounded-lg shadow-lg"
                          src={`${config.api.base_url}/storage/${item}`}
                        />
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 grid-cols-1 gap-10 w-full">
                {items?.map(item => (
                  <HistoryCard item={item} key={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <UsifulLinks />
    </div>
  );
};

export default HistoryUniversity;
