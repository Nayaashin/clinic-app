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
                  href="https://www.instagram.com/"
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
              <p className={style.text_logo}>Your dantist</p>
            </div>
            <div className={style.wrapper}>
              <p className={style.text}>
                <span className={style.logo}>Your dantist</span> is a modern
                dental office in the city center. We invite children, adults as
                well as the elderly. <br />
                An experienced dental team is waiting for you at al. Architects
                10B
              </p>
              <a href="tel:+996701102442" className={style.phone_btn}>
                <svg className={style.icon}>
                  <use xlinkHref={`${Icons}#icon-smartphone`} />
                </svg>
                +996701102442
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
