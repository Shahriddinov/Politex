/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */
import { get } from "lodash";
import { useTranslation } from "react-i18next";
import config from "../../config";

const RectorSmallCard = ({ item }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="my-10">
      <div className=" bg-white p-5 rounded-xl shadow-lg relative duration-300">
        <div className="rounded-xl items-center justify-between duration-300">
          <img
            src={`${config.api.base_url}/storage/${get(item, "img")}`}
            className="w-[200px] h-[250px] left-0 top-1/2 transform -translate-y-1/2 absolute rounded-xl object-cover object-center lg:block hidden"
          />
          <div className="lg:pl-[200px] flex flex-col items-between duration-300">
            <div className="font-medium text-base cursor-pointer">{get(item, `name[${i18n.language}]`)}</div>
            <div className="flex items-center gap-1 text-base">
              <span className="font-medium">{t("position")}:</span>
              <span>{get(item, `degree[${i18n.language}]`)}</span>
            </div>
            <div className="flex items-center gap-1 text-base">
              <span className="font-medium">{t("phone")}:</span>
              <span>{get(item, "phone")}</span>
            </div>
            <div className="flex items-center gap-1 text-base">
              <span className="font-medium">{t("email")}:</span>
              <span>{get(item, "email")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RectorSmallCard;
