/* eslint-disable react/button-has-type */
import { TiArrowSortedDown } from "react-icons/ti";
import { Dropdown } from "antd";
import { useTranslation } from "react-i18next";
import classes from "./Language.module.scss";
import uz from "../../assets/images/uz.png";
import ru from "../../assets/images/ru.png";
import en from "../../assets/images/en.png";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const languages = [
    {
      value: "uz",
      name: "UZ",
      icon: uz
    },
    {
      value: "ru",
      name: "RU",
      icon: ru
    },
    {
      value: "en",
      name: "EN",
      icon: en
    }
  ];

  const menu = (
    <div className={classes.wrapper}>
      {languages
        .filter(item => item.value !== i18n.language)
        .map(item => (
          <button key={item.value} onClick={() => i18n.changeLanguage(item.value)} className={classes.button}>
            <img width={20} src={item.icon} alt={item.name} />
            <span>{item.name}</span>
          </button>
        ))}
    </div>
  );

  const language = languages?.find(item => item.value === i18n.language);

  return (
    <Dropdown overlay={menu} placement="bottom" trigger={["click"]}>
      <div className={classes.wrapperMain}>
        <img width={20} src={language?.icon} alt={language?.name} />
        <span>{language?.name}</span>
        <TiArrowSortedDown />
      </div>
    </Dropdown>
  );
};

export default LanguageSwitcher;
