import { useTranslation } from "react-i18next";
import HeaderImg from "../../../components/HeaderImg";
import UsifulLinks from "../../../components/UsifulLinksSwiper";
import RectorCard from "../../../components/RectorCard";
import useList from "../../../modules/hooks/useRectorat";

const Rectorate = () => {
  const { t } = useTranslation();
  const { items } = useList();

  return (
    <>
      <HeaderImg
        text="rectorate"
        paths={[
          {
            title: "rectorate"
          }
        ]}
      />
      <div className="responsive">
        <div className=" flex justify-between items-end w-full border-b mt-10">
          <h2 className="md:text-2xl text-base mb-0 text-black">{t("rectorate")}</h2>
        </div>
      </div>
      <div className="responsive">
        <div className=" flex flex-col gap-5">{Array.isArray(items) && items.map(item => <RectorCard key={item.id} item={item} />)}</div>
      </div>
      <UsifulLinks />
    </>
  );
};

export default Rectorate;
