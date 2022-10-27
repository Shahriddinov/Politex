import { useTranslation } from "react-i18next";
import FaculityCard from "../../components/FaculityCard";
import MainSwiper from "../../components/MainSwiper";
import UsifulLinks from "../../components/UsifulLinksSwiper";
import InterActive from "../../components/InterActive";
import OurGraduats from "../../components/OurGraduats";
import Facts from "../../components/Facts";
import NewsSection from "../../components/NewsSection";
import useList from "../../modules/hooks/useFacultets";
import play from "../../assets/images/play_banner.png";

const Home = () => {
  const { items } = useList();
  const { t } = useTranslation();

  return (
    <section>
      {/* asosiy swiper */}
      <MainSwiper />
      <div>
        {/* yangiliklar */}
        <NewsSection />

        {/* banner */}
        <div className="w-full h-[800px]">
          <div className="w-full h-[840px] flex absolute justify-center items-center">
            <img src={play} alt="" className="cursor-pointer" width={110} />
          </div>
          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
          <img
            className="object-cover object-center w-full h-full"
            src="https://images.unsplash.com/photo-1627556704353-016baeb12c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="photo"
          />
        </div>

        {/* fakultetlar */}
        <section className="py-14">
          <div className="responsive">
            <div className="flex justify-between items-end w-full border-b">
              <h2 className="md:text-2xl text-base mb-0">{t("facultets")}</h2>
            </div>
          </div>
          <div className="responsive">
            <div className="mt-12 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5">
              {Array.isArray(items) && items.map((item, id) => <FaculityCard key={id} item={item} />)}
            </div>
          </div>
        </section>

        {/* bitiruvchilar */}
        <OurGraduats />

        {/* kafediralar */}
        <Facts />
        {/* interaktive xizmatlar */}
        <InterActive />
        {/* foydali havolalar */}
        <UsifulLinks />
      </div>
    </section>
  );
};

export default Home;
