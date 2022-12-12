import style from "./Contacts.module.scss";
import Icons from "../../../images/sprite.svg";

const Contacts = () => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Контакты</h1>
      <p className={style.text}>
        Мы открыты с понедельника по субботу с 9:00 по 17:00 <br />
        Воскресенье не рабочий день.
      </p>
      <ul className={style.list}>
        <li className={style.item}>
          <svg className={style.icon}>
            <use xlinkHref={`${Icons}#icon-location`} />
          </svg>
          <h3>Адрес</h3>
          <a
            href="https://goo.gl/maps/5ymqvmsGVsiengHQA/"
            target="_blank"
            className={style.map}
            rel="noreferrer"
          >
            г. Бишкек<br />
            Улица Токтогула, 244
          </a>
        </li>
        <li className={style.item}>
          <svg className={style.icon}>
            <use xlinkHref={`${Icons}#icon-email`} />
          </svg>
          <h3>Email</h3>
          <a href="mailto:info@example.com" className={style.email}>
            nayaashin.99@gmail.com
          </a>
        </li>
        <li className={style.item}>
          <svg className={style.icon}>
            <use xlinkHref={`${Icons}#icon-phone`} />
          </svg>
          <h3>Телефон</h3>
          <a href="tel:+996555170324" className={style.phone}>
            +996 555 170 324
          </a>
        </li>
      </ul>
      <div>
        <div className={style.contact}>
          <p className={style.contact_text}>Как найти нас</p>
        </div>
        <ul className={style.list_icons}>
          <li className={style.list_item}>
            <a
              href="https://www.instagram.com/triamed.kg"
              target="_blank"
              className={style.list_link}
              rel="noreferrer"
            >
              <svg className={style.svg}>
                <use xlinkHref={`${Icons}#icon-instagram`} />
              </svg>
            </a>
          </li>
          <li className={style.list_item}>
            <a
              href="https://t.me/nayaashin"
              target="_blank"
              className={style.list_link}
              rel="noreferrer"
            >
              <svg className={style.svg}>
                <use xlinkHref={`${Icons}#icon-telega`} />
              </svg>
            </a>
          </li>
          <li className={style.list_item}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className={style.list_link}
              rel="noreferrer"
            >
              <svg className={style.svg}>
                <use href={`${Icons}#icon-fbook`}></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
