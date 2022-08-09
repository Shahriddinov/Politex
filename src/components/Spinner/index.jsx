/* eslint-disable import/no-unresolved */
import { LoadingOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/images/LogoWhite.png";

const Spinner = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-screen fixed top-0 left-0 z-50 flex items-center justify-center bg-primary_green bg-opacity-95">
      <div className="flex items-center justify-center flex-col gap-5">
        <img className="w-[250px]" src={Logo} alt="" />
        <h1 className="text-xl text-white text-center">{t("university_name")}</h1>
        <span className="text-white">
          <LoadingOutlined className="text-4xl" />
        </span>
      </div>
    </div>
  );
};

export default Spinner;
