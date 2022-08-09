import { SearchOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import classes from "./Search.module.scss";

const Search = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.wrapper}>
      <input className={classes.wrapperInput} type="text" placeholder={t("placeholder_search")} />
      <SearchOutlined className={classes.wrapperIcon} />
    </div>
  );
};

export default Search;
