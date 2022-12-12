import { Outlet } from "react-router-dom";
import style from "./Nav.module.scss";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Nav = () => {
  return (
    <>
      <Header />

      <main className={style.container}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Nav;
