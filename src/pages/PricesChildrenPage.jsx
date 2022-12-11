import Icons from "../images/sprite.svg";

const childrenList = [
  "dental examination - 120 PLN",
  "anesthesia during treatment - included filling of a deciduous tooth - 160 PLN",
  "permanent tooth filling - 200-300 PLN",
  "extended sealing - 120 PLN",
  "therapeutic bandage - PLN 150impregnation - 120 PLN",
  "fluoridation - 120 PLN",
  "deciduous tooth removal - 150 PLN",
];

const PricesChildrenPage = () => {
  return (
    <div className="container">
      <h1 className="prices_title">Детская стоматология</h1>
      <span className="prices_line"></span>
      <div>
        <ul className="prices_list">
          {childrenList.map((item) => (
            <li key={item.length} className="prices_listItem">
              <span>
                <svg className="prices_icon">
                  <use xlinkHref={`${Icons}#icon-pushpin`} />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <p className="prices_disc">
        `Данные цены являются ориентировочными, не обязательными и не являются офертой. Окончательная стоимость определяется в ходе врачебной консультации и составления индивидуального плана лечения.`
      </p>
    </div>
  );
};

export default PricesChildrenPage;
