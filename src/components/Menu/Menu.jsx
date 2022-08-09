/* eslint-disable jsx-a11y/tabindex-no-positive */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { BarsOutlined, CaretDownOutlined, CaretLeftOutlined, CaretRightOutlined, CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import cx from "classnames";
import { useNavigate } from "react-router";
import classes from "./Menu.module.scss";
import { menus } from "./data";
import { Item, List } from "../Collapse";
import LogoGreen from "../../assets/images/LogoGreen.png";

const Menu = () => {
  const [search, setSearch] = useState(false);
  const [selectMenu, setSelectMenu] = useState(null);

  const { t } = useTranslation();
  const navigate = useNavigate();
  const toggleSearch = () => setSearch(current => !current);

  const handleClear = () => {
    setSelectMenu(null);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapperMain}>
        <div className={classes.wrapperContainer}>
          <div className={classes.wrapperIconContainer}>
            <SearchOutlined onClick={toggleSearch} className={classes.wrapperIconContainerIcon} />
          </div>
          {search ? (
            <div className={classes.search}>
              <input type="text" className={classes.searchInput} placeholder={t("placeholder_search")} />
            </div>
          ) : (
            <div className={classes.list}>
              {menus.map(item => (
                <span key={item.id} role="button" tabIndex={item.id} onClick={() => setSelectMenu(item.id)}>
                  {item.title}
                </span>
              ))}
            </div>
          )}
          <div className={classes.wrapperIconContainer}>
            {search ? (
              <CloseOutlined className={classes.wrapperIconContainerIcon} onClick={toggleSearch} />
            ) : (
              <BarsOutlined className={classes.wrapperIconContainerIcon} onClick={() => navigate("/sitemap")} />
            )}
          </div>
        </div>
        {selectMenu && <MenuBar onClear={handleClear} menuID={selectMenu} />}
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const MenuBar = ({ onClear, menuID }) => {
  const [select, setSelect] = useState(null);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const items = menus.find(item => item.id === menuID);
  const subItems = items.children.find(item => item.id === select);

  return (
    <div onMouseLeave={onClear} className={classes.menu}>
      <div className={classes.menuContainer}>
        <div className={classes.menuTitle}>
          <span>{t(items?.title)}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, sequi!</p>
        </div>
        <div className={classes.menuList}>
          {items?.children?.map(item =>
            item?.children ? (
              <div
                className={cx(classes.menuListButton, item?.id === select && classes["menuListButton--active"])}
                tabIndex={item?.id}
                role="button"
                key={item?.id}
                onClick={() => setSelect(item?.id)}
              >
                <span>{t(item?.title)}</span>
                {item?.id === select ? <CaretLeftOutlined /> : <CaretRightOutlined />}
              </div>
            ) : (
              <div className={classes.menuListButton} tabIndex={item?.id} role="button" key={item?.id} onClick={() => navigate(item?.path)}>
                {t(item?.title)}
              </div>
            )
          )}
        </div>
        <div className={classes.menuList}>
          {subItems?.children?.map(item =>
            item?.children ? (
              <List key={item?.title}>
                <Item
                  key={item?.title}
                  header={
                    <div className={classes.menuListButton} tabIndex={item?.id} role="button" key={item?.id}>
                      <span>{t(item?.title)}</span>
                      <CaretDownOutlined />
                    </div>
                  }
                >
                  <div className={classes.menuList}>
                    {item?.children?.map(child => (
                      <div className={classes.menuListButton} tabIndex={child?.id} role="button" key={child?.id} onClick={() => navigate(child?.path)}>
                        {t(child?.title)}
                      </div>
                    ))}
                  </div>
                </Item>
              </List>
            ) : (
              <div className={classes.menuListButton} tabIndex={item?.id} role="button" key={item?.id} onClick={() => navigate(item?.path)}>
                {t(item?.title)}
              </div>
            )
          )}
        </div>

        <img src={LogoGreen} alt="logo" />
      </div>
    </div>
  );
};

export default Menu;
