import style from "./Home.module.scss";
import tooth from "../../images/icon-tooth.png";
import Icons from "../../images/sprite.svg";

const Home = () => {
  return (
    <div className="container">
      <div className={style.field}>
        <div className={style.wrap}>
          <aside className={style.aside}>
            <span className={style.line}></span>
            <ul className={style.list}>
              <li className={style.list_item}>
                <a
                  href="https://www.instagram.com/triamed.kg"
                  target="_blank"
                  rel="noreferrer"
                >
                  instagram
                </a>
              </li>
              <li className={style.list_item}>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  facebook
                </a>
              </li>
              <li className={style.list_item}>
                <a
                  href="https://www.google.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  google
                </a>
              </li>
            </ul>
          </aside>
          <div className={style.content}>
            <div className={style.flex}>
              <img src={tooth} alt="" className={style.tooth} />
              <p className={style.text_logo}>TriaMed Stomatology</p>
            </div>
            <div className={style.wrapper}>
              <p className={style.text}>
                <span className={style.logo}>TriaMed</span> имеет современный
                стоматологический кабинет в центре города. Приглашаем детей, взрослых
                так же пожилых людей. <br />
                Команда опытных стоматологов ждет вас по адресу г. Бишкек, ул. Токтогула, 244
              </p>
              <a href="tel:+996555170324" className={style.phone_btn}>
                <svg className={style.icon}>
                  <use xlinkHref={`${Icons}#icon-smartphone`} />
                </svg>
                +996 555 170 324
              </a>
              <span className={style.line1}></span>
              <span className={style.line2}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
