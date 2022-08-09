/* eslint-disable react/prop-types */
import { get } from "lodash";
import { useTranslation } from "react-i18next";
import config from "../../config";

const HistoryCard = ({ item }) => {
  const { i18n } = useTranslation();

  return (
    <div>
      <div className="w-full rounded-lg shadow-lg bg-white h-20 flex items-center px-3">
        <img className="rounded-full h-24 w-24 mx-4 object-cover object-center" src={`${config.api.base_url}/storage/${get(item, "img")}`} alt="graduates" />
        <div className="flex flex-col py-2">
          <span className="md:text-lg text-base font-medium">{get(item, `name[${i18n.language}]`)}</span>
          <span className="lg:block hidden text-base font-normal">{get(item, `position[${i18n.language}]`)}</span>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
