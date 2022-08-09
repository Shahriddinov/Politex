import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import classes from "./Header.module.scss";
import Logo from "../../assets/images/LogoWhite.png";
import LanguageSwitcher from "../LanguageSwitcher";
import Menu from "../Menu";

const Header = () => {
  const { t } = useTranslation();
  const urls = [
    {
      title: "finance_activity",
      link: "/finance_activity"
    },
    {
      title: "electron_library",
      link: "/electron_library"
    },
    {
      title: "preparatory_course",
      link: "/preparatory_course"
    },
    {
      title: "hemis",
      link: "/hemis"
    }
  ];

  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapperContainer}>
        <div className={classes.wrapperTitle}>
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <h1>{t("universitet")}</h1>
        </div>

        <div className={classes.wrapperMenu}>
          {urls.map(item => (
            <Link to={item.link}>{t(item.title)}</Link>
          ))}
          <LanguageSwitcher />
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Header;
