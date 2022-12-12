import { useState } from "react";
import style from "./Prices.module.scss";
import Icons from "../../../images/sprite.svg";

const ListItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handlerClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <li
      className={`${style.parentListItem} ${
        isOpen ? style.parentListItemOpen : ""
      }`}
    >
      <p onClick={() => handlerClick()} className={style.titleItem}>
        {props.title}
        {isOpen ? (
          <span>
            <svg className={style.iconClose}>
              <use xlinkHref={`${Icons}#icon-shrink2`} />
            </svg>
          </span>
        ) : (
          <span>
            <svg className={`${style.iconClose} ${style.close}`}>
              <use xlinkHref={`${Icons}#icon-enlarge2`} />
            </svg>
          </span>
        )}
      </p>
      <div className={`${style.innerList} ${isOpen ? style.open : ""}`}>
        <ul className={style.itemList}>
          {props.list.map((item) => (
            <li key={item.length} className={style.itemListItem}>
              <span>
                <svg className={style.icon}>
                  <use xlinkHref={`${Icons}#icon-pushpin`} />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>
        <p className={style.itemDisc}>{props.message}</p>
      </div>
    </li>
  );
};

export default ListItem;
