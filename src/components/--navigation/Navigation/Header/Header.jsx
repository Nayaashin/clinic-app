import CustomeLink from "../../CustomeLink/CustomeLink";
import style from "./Header.module.scss";
import tooth from "../../../../images/icon-tooth.png";
import Icons from "../../../../images/sprite.svg";
import { useState } from "react";
import NavMob from "../NavMob";

const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal((prev) => !prev);
  };
  // const [value, setValue] = useState("");

  // function chengeSelect(e) {
  //   setValue(e.target.value);
  // }

  return (
    <header>
      <div className="container">
        <div className={style.flex}>
          <div className={style.flex}>
            <a href="" className={style.link_logo}>
              <img src={tooth} alt="" className={style.header_tooth} />
              <p className={style.text_logo}>Your dantist</p>
            </a>
          </div>

          <div className={style.link_wrapper}>
            <CustomeLink to="/">Home</CustomeLink>
            <CustomeLink to="/about">About</CustomeLink>
            <CustomeLink to="/offers">Offers</CustomeLink>
            {/* <CustomeLink to="/prices">Prices</CustomeLink> */}
            <a className={style.parentListItem}>
              <p className={style.text}>Prices</p>
              <ul className={style.list}>
                <li className={style.innerList}>
                  <CustomeLink to="/prices/general">General</CustomeLink>
                </li>
                <li className={style.innerList}>
                  <CustomeLink to="/prices/prevention">Prevention</CustomeLink>
                </li>
                <li className={style.innerList}>
                  <CustomeLink to="/prices/endodontics">
                    Endodontics
                  </CustomeLink>
                </li>
                <li className={style.innerList}>
                  <CustomeLink to="/prices/orthodontics">
                    Orthodontics
                  </CustomeLink>
                </li>
                <li className={style.innerList}>
                  <CustomeLink to="/prices/surgery">Surgery</CustomeLink>
                </li>
                <li className={style.innerList}>
                  <CustomeLink to="/prices/prosthetics">
                    Prosthetics
                  </CustomeLink>
                </li>
                <li className={style.innerList}>
                  <CustomeLink to="/prices/children">
                    Kid's dentistry
                  </CustomeLink>
                </li>
                <li className={style.innerList}>
                  <CustomeLink to="/prices/xray">X-ray</CustomeLink>
                </li>
              </ul>
            </a>
            <CustomeLink to="/gallery">Gallery</CustomeLink>
            <CustomeLink to="/contacts">Contacts</CustomeLink>
          </div>
          {/* className={style.Section1 + " " + style.Section2} */}

          <button
            type="button"
            onClick={() => toggleModal()}
            className={style.btn_menu}
          >
            <svg className={style.icon_menu} width={32} height={32}>
              <use xlinkHref={`${Icons}#icon-Burger`} />
            </svg>
          </button>

          {isOpenModal && (
            <div className={style.link_panel}>
              <NavMob isOpenModal={isOpenModal} handleClose={toggleModal} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
