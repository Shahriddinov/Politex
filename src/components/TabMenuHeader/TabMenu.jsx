/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link, useNavigate } from "react-router-dom";
import { CaretDownOutlined, CaretLeftOutlined, CaretRightOutlined, CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import cx from "classnames";
import { useTranslation } from "react-i18next";
import classes from "./TabMenu.module.scss";
import LogoWhite from "../../assets/images/LogoWhite.png";
import { paths, menus } from "../Menu/data";
import { Item, List } from "../Collapse";
import Search from "../Search";
import LogoGreen from "../../assets/images/LogoGreen.png";

const TabMenu = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState(null);
  const toggleMenu = () => setOpen(current => !current);

  const subMenu = menus.find(menu => menu.id === select);

  return (
    <div className={cx(classes.wrapper, open && classes["wrapper--active"])}>
      {open ? (
        <div className={cx(classes.wrapperContainer, open && classes["wrapperContainer--active"])}>
          {paths.map(item => (
            <span className={cx(classes.wrapperContainerItem)}>{item.title}</span>
          ))}
          <div className={classes.wrapperAction}>
            <CloseOutlined className={cx(classes.wrapperActionClose)} onClick={toggleMenu} />
          </div>
        </div>
      ) : (
        <div className={classes.wrapperContainer}>
          <div className={classes.wrapperTitle}>
            <Link to="/">
              <img src={LogoWhite} alt="Logo" />
            </Link>
            <h1>{t("university_name")}</h1>
          </div>
          <div className={classes.wrapperAction}>
            <MenuOutlined className={classes.wrapperActionIcon} onClick={toggleMenu} />
          </div>
        </div>
      )}
      <div className={cx(classes.wrapperMenu, open && classes["wrapperMenu--active"])}>
        <div className={classes.wrapperMenuContainer}>
          <Search />
          {menus?.map(menu =>
            menu?.children ? (
              <div
                className={cx(classes.wrapperMenuButton, menu?.id === select && classes["wrapperMenuButton--active"])}
                tabIndex={menu?.id}
                role="button"
                key={menu?.id}
                onClick={() => setSelect(menu?.id)}
              >
                <span>{t(menu?.title)}</span>
                {menu?.id === select ? <CaretLeftOutlined /> : <CaretRightOutlined />}
              </div>
            ) : (
              <div className={classes.wrapperMenuButton} tabIndex={menu?.id} role="button" key={menu?.id} onClick={() => navigate(menu?.path)}>
                {t(menu?.title)}
              </div>
            )
          )}
        </div>
        <div className={classes.wrapperMenuContainer}>
          {subMenu?.children.map(menu =>
            menu?.children ? (
              <List key={menu?.title}>
                <Item
                  key={menu?.title}
                  header={
                    <div className={classes.wrapperMenuButton} tabIndex={menu?.id} role="button" key={menu?.id}>
                      <span>{t(menu?.title)}</span>
                      <CaretDownOutlined />
                    </div>
                  }
                >
                  <div className={classes.wrapperMenuContainer}>
                    {menu?.children.map(item =>
                      item?.children ? (
                        <List key={item?.title}>
                          <Item
                            key={item?.title}
                            header={
                              <div className={classes.wrapperMenuButton} tabIndex={item?.id} role="button" key={item?.id}>
                                <span>{t(item?.title)}</span>
                                <CaretDownOutlined />
                              </div>
                            }
                          >
                            <div className={classes.wrapperMenuContainer}>
                              {item?.children?.map(child => (
                                <div
                                  className={classes.wrapperMenuButton}
                                  tabIndex={child?.id}
                                  role="button"
                                  key={child?.id}
                                  onClick={() => navigate(child?.path)}
                                >
                                  {t(child?.title)}
                                </div>
                              ))}
                            </div>
                          </Item>
                        </List>
                      ) : (
                        <div className={classes.wrapperMenuButton} tabIndex={item?.id} role="button" key={item?.id} onClick={() => navigate(item?.path)}>
                          {t(item?.title)}
                        </div>
                      )
                    )}
                  </div>
                </Item>
              </List>
            ) : (
              <div className={classes.wrapperMenuButton} tabIndex={menu?.id} role="button" key={menu?.id} onClick={() => navigate(menu?.path)}>
                {t(menu?.title)}
              </div>
            )
          )}

          <img src={LogoGreen} className={classes.image} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default TabMenu;
