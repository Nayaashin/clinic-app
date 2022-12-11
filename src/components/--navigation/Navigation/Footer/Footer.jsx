import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.container_footer}>
      <div className={style.footer_wrapper}>
        <div className="container">
          {/* <img src={tooth} alt="" className={style.tooth} /> */}
          <p className={style.text}>
            &copy; 2022 | My project | Developed by Dana
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
