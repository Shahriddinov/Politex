import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { Music } from "react-feather";
import cx from "classnames";
import classes from "./TopHead.module.scss";
import Gerb from "../../assets/images/gerb.png";
import Flag from "../../assets/images/uz.png";
import Tools from "../Tools";
import LanguageSwitcher from "../LanguageSwitcher";

const Header = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapperContainer}>
        <div className={cx(classes.wrapperRight)}>
          <div className={classes.wrapperIconsContainer}>
            <img width={20} height={20} src={Gerb} alt="Gerb" />
          </div>
          <div className={classes.wrapperIconsContainer}>
            <img width={20} height={20} src={Flag} alt="Flag" />
          </div>
          <div className={classes.wrapperIconsContainer}>
            <Music size={20} />
          </div>
        </div>

        {/* Wrapper icons */}
        <div className={classes.wrapperIcons}>
          <a href="tel:+998712464600" className={classes.wrapperIconsContainer}>
            <AiOutlinePhone size={20} />
            <span>+998 72 246-46-00</span>
          </a>
          <a href="mailto:tstu_info@tdtu.u" className={classes.wrapperIconsContainer}>
            <AiOutlineMail size={20} />
            <span>tstu_info@tdtu.u</span>
          </a>
          <div className={classes.wrapperIconsContainer}>
            <Tools />
          </div>
          <div className={classes.wrapperUzb}>
            <div className={classes.wrapperIconsContainer}>
              <img width={20} height={20} src={Gerb} alt="Gerb" />
            </div>
            <div className={classes.wrapperIconsContainer}>
              <img width={20} height={20} src={Flag} alt="Flag" />
            </div>
            <div className={classes.wrapperIconsContainer}>
              <Music size={20} />
            </div>
          </div>
          <div className={cx(classes.wrapperLang)}>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
