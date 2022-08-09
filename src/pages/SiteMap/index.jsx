/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-expressions */
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CaretDownOutlined, CloseOutlined } from "@ant-design/icons";
import TopHead from "../../components/TopHead";
import LogoGreen from "../../assets/images/LogoGreen.png";
import { footer, menus } from "../../components/Menu/data";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { Item, List } from "../../components/Collapse";

const SiteMap = () => {
  const { t } = useTranslation();

  return (
    <div>
      <TopHead />
      <div className="responsive">
        <div>
          {/* Header */}
          <div className="py-[16px] flex items-center justify-between">
            <div className="flex items-center justify-center 2xl:gap-[25px] gap-[20px]">
              <Link to="/">
                <img src={LogoGreen} alt="logo" className="2xl:w-[110px] w-[80px] h-[80px] 2xl:h-[110px]" />
              </Link>
              <span className="text-primary_green 2xl:text-[30px] text-[20px] font-bold max-w-[600px]">
                Islom Karimov nomidagi Toshkent Davlat Texnika Universiteti
              </span>
            </div>
            <h2 className="font-bold 2xl:text-[30px] text-[20px]">Universitet shiori</h2>
          </div>
          {/* Menu */}
          <div className="flex items-center justify-between border-t-2 border-b-2 p-[20px] border-primary_green">
            {footer.map(item => (
              <Link className="text-black 2xl:text-[20px] text-[14px]" key={item.path} to={item.path}>
                {t(item.title)}
              </Link>
            ))}
            <LanguageSwitcher />
            <CloseOutlined onClick={() => history.back()} />
          </div>

          {/* List */}
          <div className="mt-[20px] flex justify-between ">
            {menus.map(item => (
              <div key={item.id} className="border-l-2 pl-[3px] h-full w-[12.5%]">
                {item?.path ? (
                  <Link className="text-black" to={item.path}>
                    {t(item.title)}
                  </Link>
                ) : (
                  <h4>{t(item.title)}</h4>
                )}
                <div className="flex flex-col break-all gap-3">
                  {item.children?.map(child => {
                    return child?.path ? (
                      <Link to={child?.path} key={child.id} className="break-all text-black">
                        {t(child.title)}
                      </Link>
                    ) : (
                      <List key={child?.title}>
                        <Item
                          key={child?.title}
                          header={
                            <div className="flex justify-between items-center" tabIndex={child?.id} role="button" key={child?.id}>
                              <span>{t(child?.title)}</span>
                              <CaretDownOutlined />
                            </div>
                          }
                        >
                          <div className=" flex flex-col gap-2">
                            {child?.children?.map(subChild => {
                              return subChild?.path ? (
                                <Link to={subChild?.path} key={subChild.id} className="break-all text-black">
                                  {t(subChild.title)}
                                </Link>
                              ) : (
                                <List key={subChild?.title}>
                                  <Item
                                    key={subChild?.title}
                                    header={
                                      <div className="flex justify-between items-center" tabIndex={subChild?.id} role="button" key={subChild?.id}>
                                        <span>{t(subChild?.title)}</span>
                                        <CaretDownOutlined />
                                      </div>
                                    }
                                  >
                                    <div className="flex flex-col gap-2">
                                      {subChild?.children?.map(subSubChild => (
                                        <Link className="break-all text-black" to={subSubChild?.path}>
                                          {t(subSubChild?.title)}
                                        </Link>
                                      ))}
                                    </div>
                                  </Item>
                                </List>
                              );
                            })}
                          </div>
                        </Item>
                      </List>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteMap;
