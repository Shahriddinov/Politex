/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
import { CloseOutlined, MenuOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import cx from "classnames";
import LogoWhite from "../../assets/images/LogoWhite.png";
import LogoGreen from "../../assets/images/LogoGreen.png";
import classes from "./Mobile.module.scss";
import Search from "../Search";
import { menus, paths } from "../Menu/data";
import { List, Item } from "../Collapse";

const Mobile = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(current => !current);
  return (
    <div className={cx(classes.wrapper, open && classes["wrapper--active"])}>
      <div className={cx(classes.wrapperContainer, open && classes["wrapperContainer--active"])}>
        <div className={cx(classes.wrapperTitle, open && classes["wrapperTitle--active"])}>
          <Link to="/">{open ? <img src={LogoGreen} alt="Logo" /> : <img src={LogoWhite} alt="Logo" />}</Link>
          <h1>{t("university_name")}</h1>
        </div>
        <div className={classes.wrapperAction}>
          {open ? (
            <CloseOutlined className={classes.wrapperActionClose} onClick={toggleMenu} />
          ) : (
            <MenuOutlined className={classes.wrapperActionIcon} onClick={toggleMenu} />
          )}
        </div>
      </div>
      <div className={cx(classes.menu, open && classes["menu--active"])}>
        <Search />
        <div className={classes.menuPaths}>
          {paths.map(item => (
            <button className={classes.menuPathsButton} onClick={() => navigate(item.path)}>
              {t(item.title)}
            </button>
          ))}
        </div>
        <div className={classes.menuList}>
          {menus.map(menu =>
            menu.children ? (
              <List key={menu?.title}>
                <Item
                  key={menu?.title}
                  header={
                    <div className={classes.menuListButton}>
                      <span>{t(menu?.title)}</span>
                      <PlusOutlined className={classes.menuListButtonIcon} />
                    </div>
                  }
                >
                  <div className={classes.menuList}>
                    {menu?.children?.map(item =>
                      item.children ? (
                        <List key={item?.title}>
                          <Item
                            key={item?.title}
                            header={
                              <div className={classes.menuListButton}>
                                <span>{t(item?.title)}</span>
                                <PlusOutlined className={classes.menuListButtonIcon} />
                              </div>
                            }
                          >
                            <div className={classes.menuList}>
                              {item?.children?.map(child =>
                                child.children ? (
                                  <List key={child?.title}>
                                    <Item
                                      key={child?.title}
                                      header={
                                        <div className={classes.menuListButton}>
                                          <span>{t(child?.title)}</span>
                                          <PlusOutlined className={classes.menuListButtonIcon} />
                                        </div>
                                      }
                                    >
                                      <div className={classes.menuList}>
                                        {child?.children?.map(subChild => (
                                          <div onClick={() => navigate(subChild?.path)} className={classes.menuListButton}>
                                            <span>{t(subChild?.title)}</span>
                                          </div>
                                        ))}
                                      </div>
                                    </Item>
                                  </List>
                                ) : (
                                  <div onClick={() => navigate(child?.path)} className={classes.menuListButton}>
                                    <span>{t(child?.title)}</span>
                                  </div>
                                )
                              )}
                            </div>
                          </Item>
                        </List>
                      ) : (
                        <div onClick={() => navigate(item?.path)} className={classes.menuListButton}>
                          <span>{t(item?.title)}</span>
                        </div>
                      )
                    )}
                  </div>
                </Item>
              </List>
            ) : (
              <div onClick={() => navigate(menu?.path)} className={classes.menuListButton}>
                <span>{t(menu?.title)}</span>
              </div>
            )
          )}
        </div>

        <img src={LogoGreen} className={classes.image} alt="logo" />
      </div>
    </div>
  );
};

export default Mobile;
