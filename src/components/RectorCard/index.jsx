/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import { get } from "lodash";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/images/LogoWhite.png";
import LogoGreen from "../../assets/images/LogoGreen.png";
import config from "../../config";

const RectorCard = ({ item, active = false }) => {
  const { i18n, t } = useTranslation();

  return (
    <div className="my-12">
      <div className={`${active && "bg-primary_green"} group hover:bg-primary_green bg-white p-5 rounded-xl shadow-lg relative duration-300`}>
        <div
          className={`${
            active && "border-white"
          } group-hover:border-white border border-primary_green rounded-xl md:p-10 p-5 grid md:grid-cols-4 items-center justify-between duration-300`}
        >
          <div className="md:flex hidden col-span-1 relative items-center justify-center">
            <div
              className="md:w-[300px] w-[200px] md:h-[350px] h-[250px] absolute p-5 rounded-xl"
              style={{ background: `url(${config.api.base_url}/storage/${get(item, "img")})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div className="border h-full rounded-xl" />
            </div>
          </div>
          <div
            className={`${
              active && "text-white"
            } md:col-span-3 sm:col-span-2 col-span-1 md:pl-[100px] flex flex-col items-between group-hover:text-white duration-300`}
          >
            <div className="font-medium md:text-lg text-base cursor-pointer">{get(item, `name[${i18n.language}]`)}</div>
            <div className="flex items-center gap-1  md:text-lg text-base">
              <span className="font-medium">{t("position")}:</span>
              <span>{get(item, `position[${i18n.language}]`)}</span>
            </div>
            <div className="flex items-center gap-1  md:text-lg text-base">
              <span className="font-medium">{t("degree")}:</span>
              <span>{get(item, `degree[${i18n.language}]`)}</span>
            </div>
            <div className="flex items-center gap-1  md:text-lg text-base">
              <span className="font-medium">{t("reception_time")}:</span>
              <span>{get(item, `time[${i18n.language}]`)}</span>
            </div>
            <div className="flex items-center gap-1  md:text-lg text-base">
              <span className="font-medium">{t("phone")}:</span>
              <span>{get(item, "phone")}</span>
            </div>
            <div className="flex items-center gap-1  md:text-lg text-base">
              <span className="font-medium">{t("email")}:</span>
              <span>{get(item, "email")}</span>
            </div>
          </div>
          <div className="col-span-1 md:flex hidden justify-end absolute right-20">
            {active ? (
              <img src={Logo} className="w-40 block " alt="logo" srcSet="" />
            ) : (
              <>
                <img src={LogoGreen} className="group-hover:hidden block w-40" alt="logo" srcSet="" />
                <img src={Logo} className="w-40 group-hover:block hidden" alt="logo" srcSet="" />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RectorCard;
