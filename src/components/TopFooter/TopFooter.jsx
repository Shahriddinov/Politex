import classes from "./TopFooter.module.scss";
import Napa from "../../assets/images/napa.png";

const Header = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapperContainer}>
        <h4>© TDTU 2022</h4>
        <img src={Napa} alt="napa" />
      </div>
    </div>
  );
};

export default Header;
