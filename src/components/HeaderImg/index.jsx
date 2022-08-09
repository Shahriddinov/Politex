/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HeaderImg = ({ text, paths = [] }) => {
  const { t } = useTranslation();

  return (
    <div className="">
      <div
        style={{
          background: "url(https://upload.wikimedia.org/wikipedia/commons/5/57/TDTU.png",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
        className="md:h-[600px] h-[200px] min-h-[200px] flex items-center justify-center relative overflow-hidden"
      >
        <div className="bg-black relative w-full h-full bg-opacity-50 flex items-center justify-center">
          <div className="text-white absolute lg:top-16 lg:right-36 md:top-16 md:right-16 top-4 right-8">
            <div className="flex items-end gap-1font-semibold">
              <Link className="text-white" to="/">
                {t("home")}
              </Link>
              {paths?.map(path => (
                <>
                  /
                  {path?.path ? (
                    <Link className="text-white mb-0 pb-0" to={path?.path}>
                      {t(path?.title)}
                    </Link>
                  ) : (
                    <span className="text-white mb-0 pb-0">{t(path?.title)}</span>
                  )}
                </>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="md:text-3xl text-lg text-white text-center w-full">{text}</h1>
            <div>
              <svg className="m-auto md:w-full w-1/2 h-4" viewBox="0 0 1137 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2.5H527L567.75 30.5L608.5 2.5H1134.5" stroke="white" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderImg;
