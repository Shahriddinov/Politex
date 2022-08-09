/* eslint-disable react/prop-types */
import "./main.scss";
import { SettingFilled } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

export default function Services({ item }) {
  const { i18n } = useTranslation();

  return (
    <a
      href={item?.link}
      target="_blank"
      className="flex items-center gap-5 w-full text-black hover:text-black bg-white rounded-lg px-5 py-2 shadow-lg"
      rel="noreferrer"
    >
      <SettingFilled className="text-3xl" />
      <div>
        <h2 className="pb-0 mb-0">{item?.title[i18n.language]}</h2>
        <p className="pb-0 mb-0">{item?.subTitle[i18n.language]}</p>
      </div>
    </a>
  );
}
