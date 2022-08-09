/* eslint-disable react/prop-types */
import classes from "./Layout.module.scss";
import MobileHeader from "../components/MobileHeader";
import Header from "../components/Header/Header";
import TabMenuHeader from "../components/TabMenuHeader";
import TopHead from "../components/TopHead";
import TopFooter from "../components/TopFooter";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <TopHead />
      <div className={classes.desktop}>
        <Header />
      </div>
      <div className={classes.tab}>
        <TabMenuHeader />
      </div>
      <div className={classes.mobile}>
        <MobileHeader />
      </div>
      <main>{children}</main>
      <footer>
        <Footer />
        <TopFooter />
      </footer>
    </>
  );
};

export default Layout;
