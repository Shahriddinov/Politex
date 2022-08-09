/* eslint-disable react/prop-types */
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const PageHeader = ({ title, paths }) => {
  const { t } = useTranslation();

  return (
    <div className="responsive">
      <div className="flex justify-between items-end w-full border-b my-4">
        <h2 className="md:text-2xl text-base mb-0">{t(title)}</h2>
        <div className="flex items-end gap-1font-semibold">
          <Link className="text-black" to="/">
            {t("home")}
          </Link>
          {Array.isArray(paths) &&
            paths?.map(path => (
              <div key={path?.path}>
                /
                {path?.path ? (
                  <Link className="text-black mb-0 pb-0" to={path?.path}>
                    {t(path?.title)}
                  </Link>
                ) : (
                  <span className="text-black mb-0 pb-0">{t(path?.title)}</span>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(PageHeader);
