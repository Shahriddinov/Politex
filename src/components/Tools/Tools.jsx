/* eslint-disable react/button-has-type */
import { IoMdGlasses } from "react-icons/io";
import { Dropdown } from "antd";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import cx from "classnames";
import { storage } from "../../servises";
import classes from "./Tools.module.scss";

const Tools = () => {
  const { t } = useTranslation();

  const [mode, setMode] = useState(storage.local.get("grayscale") || false);
  const [zoom, setZoom] = useState(storage.local.get("zoom") || false);

  useEffect(() => {
    const body = document.querySelector("body");
    body.classList = `${storage.local.get("grayscale") && "grayscale"} ${storage.local.get("zoom") && "zoom"}`;
  }, [mode, zoom]);

  const handleZoom = val => {
    if (val === true) {
      setZoom(true);
      storage.local.set("zoom", true);
    } else {
      setZoom(false);
      storage.local.remove("zoom");
    }
  };

  const handleGray = val => {
    if (val === true) {
      setMode(true);
      storage.local.set("grayscale", true);
    } else {
      setMode(false);
      storage.local.remove("grayscale");
    }
  };

  const menu = (
    <div className={classes.wrapper}>
      <button onClick={() => handleGray(false)} className={cx(classes.button, !mode && classes["button--active"])}>
        {t("normal_version")}
      </button>
      <button onClick={() => handleGray(true)} className={cx(classes.button, mode && classes["button--active"])}>
        {t("black_and_white_version")}
      </button>
      <div className={classes.wrapperResize}>
        <button onClick={() => handleZoom(true)} className={cx(classes.button, zoom && classes["button--active"])}>
          <strong>A+</strong>
        </button>
        <button onClick={() => handleZoom(false)} className={cx(classes.button, !zoom && classes["button--active"])}>
          <strong>A-</strong>
        </button>
      </div>
    </div>
  );
  return (
    <Dropdown overlay={menu} placement="bottom" trigger={["click"]}>
      <IoMdGlasses fontSize={24} />
    </Dropdown>
  );
};

export default Tools;
