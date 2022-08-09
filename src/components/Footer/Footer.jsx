/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
import { useTranslation } from "react-i18next";
import { FaTelegram, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router";
import classes from "./Footer.module.scss";
import Logo from "../../assets/images/LogoWhite.png";
import Texture from "../../assets/images/TextureWhite.png";
import { footer } from "../Menu/data";

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapperContainer}>
        <h2 className={classes.wrapperTitle}>Islom Karimov Nomidagi Toshkent Davlat Texnika Universiteti</h2>
        <div className={classes.wrapperContainerGrid}>
          <div className={classes.wrapperLogo}>
            <img src={Logo} alt="Logo" />
            <div className={classes.wrapperLogoSocial}>
              <h4>Ijtimoiy Tarmoqlarda biz</h4>
              <div className={classes.wrapperLogoList}>
                <FaTelegram className={classes.wrapperLogoIcon} />
                <FaInstagram className={classes.wrapperLogoIcon} />
                <FaTwitter className={classes.wrapperLogoIcon} />
                <FaFacebook className={classes.wrapperLogoIcon} />
              </div>
            </div>
          </div>
          <div className={classes.wrapperList}>
            {footer.map(item => (
              <span onClick={() => navigate(item?.path)}>{t(item.title)}</span>
            ))}
          </div>
          <div className={classes.wrapperMap}>
            <iframe
              className={classes.wrapperMap}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.9912226757647!2d69.20454951532471!3d41.352544506117574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8c3da3c6e5c3%3A0x9882f2a6b7329d1d!2sToshkent%20davlat%20texnika%20universiteti!5e0!3m2!1sen!2sru!4v1656932628686!5m2!1sen!2sru"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className={classes.wrapperLogosSocial}>
          <h4>Ijtimoiy Tarmoqlarda biz</h4>
          <div className={classes.wrapperLogosList}>
            <FaTelegram className={classes.wrapperLogosIcon} />
            <FaInstagram className={classes.wrapperLogosIcon} />
            <FaTwitter className={classes.wrapperLogosIcon} />
            <FaFacebook className={classes.wrapperLogosIcon} />
          </div>
        </div>
      </div>
      <img className={classes.texture} src={Texture} alt="Logo" />
    </div>
  );
};

export default Footer;
