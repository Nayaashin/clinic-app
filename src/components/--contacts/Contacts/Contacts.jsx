import style from "./Contacts.module.scss";
import Icons from "../../../images/sprite.svg";

const Contacts = () => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>contacts</h1>
      <p className={style.text}>
        We work from Monday to Friday from 08:00 to 19:00. <br />
        Saturday after pre-registration.
      </p>
      <ul className={style.list}>
        <li className={style.item}>
          <svg className={style.icon}>
            <use xlinkHref={`${Icons}#icon-location`} />
          </svg>
          <h3>Address</h3>
          <a
            href="https://goo.gl/maps/5ymqvmsGVsiengHQA/"
            target="_blank"
            className={style.map}
            rel="noreferrer"
          >
            al. Architects 10B <br />
            54-115 Wroclaw
          </a>
        </li>
        <li className={style.item}>
          <svg className={style.icon}>
            <use xlinkHref={`${Icons}#icon-email`} />
          </svg>
          <h3>Email</h3>
          <a href="mailto:info@example.com" className={style.email}>
            kontakt@architekci.pl
          </a>
        </li>
        <li className={style.item}>
          <svg className={style.icon}>
            <use xlinkHref={`${Icons}#icon-phone`} />
          </svg>
          <h3>Tel</h3>
          <a href="tel:+996701102442" className={style.phone}>
            +48 607 706 890
          </a>
        </li>
      </ul>
      <div>
        <div className={style.contact}>
          <p className={style.contact_text}>Find us</p>
        </div>
        <ul className={style.list_icons}>
          <li className={style.list_item}>
            <a
              href="https://www.instagram.com/natadent_stomatologia/"
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
              href="https://t.me/CreativeDentistry"
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
              href="https://www.facebook.com/groups/215773488773090"
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
