import CustomeLink from "../CustomeLink/CustomeLink";
import Icons from "../../../images/sprite.svg";
import style from "./NavMob.module.scss";

const NavMob = ({ isOpenModal, handleClose }) => {
  return (
    <div className={style.wrap}>
      <button type="button" onClick={handleClose} className={style.btn_close}>
        <svg className={style.icon_close} width="14" height="14">
          <use xlinkHref={`${Icons}#icon-close`} />
        </svg>
      </button>

      <div className={style.link_menu}>
        <ul>
          <li>
            <CustomeLink to="/">Главная</CustomeLink>
          </li>
          <li>
            <CustomeLink to="/about">О нас</CustomeLink>
          </li>
          <li>
            <CustomeLink to="/offers">Услуги</CustomeLink>
          </li>
          {/* <li>
            <CustomeLink to="/prices">Prices</CustomeLink>
          </li> */}
          <li className={style.ItemList}>
            Prices
            <ul className={`${style.link_menu} ${style.absolute}`}>
              <li>
                <CustomeLink to="/prices/general">Общее</CustomeLink>
              </li>
              <li>
                <CustomeLink to="/prices/prevention">Профилактика</CustomeLink>
              </li>
              <li>
                <CustomeLink to="/prices/endodontics">Эндодонтия</CustomeLink>
              </li>
              <li>
                <CustomeLink to="/prices/orthodontics">Ортодонтия</CustomeLink>
              </li>
              <li>
                <CustomeLink to="/prices/surgery">Операция</CustomeLink>
              </li>
              <li>
                <CustomeLink to="/prices/prosthetics">Протезирование</CustomeLink>
              </li>
              <li>
                <CustomeLink to="/prices/children">Детская стоматология</CustomeLink>
              </li>
              <li>
                <CustomeLink to="/prices/xray">Рентген</CustomeLink>
              </li>
            </ul>
          </li>
          <li>
            <CustomeLink to="/gallery">Галерея</CustomeLink>
          </li>
          <li>
            <CustomeLink to="/about">О нас</CustomeLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMob;
