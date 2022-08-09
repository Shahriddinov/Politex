/* eslint-disable react/prop-types */
import { BarChartOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import config from "../../config";

const FaculityCard = ({ item }) => {
  const { i18n } = useTranslation();

  return (
    <div className="group relative rounded-lg shadow-lg overflow-hidden">
      <img
        src={`${config.api.base_url}/storage/${item?.img}`}
        alt="faculity"
        className="absolute w-full h-full object-cover object-center z-5 group-hover:scale-105 transform duration-300"
      />
      <div className="relative z-10 bg-black bg-opacity-50 text-white p-8 h-full">
        <div className="flex items-center justify-center">
          <BarChartOutlined className="text-4xl m-auto" />
        </div>
        <h2 className="text-white text-base text-center mt-2">{item?.name[i18n.language]}</h2>
      </div>
    </div>
  );
};

export default FaculityCard;
