/* eslint-disable react/prop-types */
import { get } from "lodash";
import { useTranslation } from "react-i18next";
import config from "../../config";

const CardStudent = ({ item }) => {
  const { i18n } = useTranslation();

  return (
    <div className="relative group w-full hover:bg-white p-2 h-fit rounded hover:shadow-lg duration-300">
      <img
        width="100%"
        className="h-[300px] transform group-hover:scale-95 duration-300 object-fit object-cover rounded-lg"
        src={`${config.api.base_url}/storage/${get(item, "img")}`}
        alt="student"
      />
      <div className="w-full mt-2">
        <h2 className="text-center text-xl font-bold mb-0">{get(item, `name[${i18n.language}]`)}</h2>
        <p className="text-center text-sm mb-0">{get(item, `position[${i18n.language}]`)}</p>
      </div>
    </div>
  );
};

export default CardStudent;
