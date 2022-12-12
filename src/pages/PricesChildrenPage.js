import Icons from "../images/sprite.svg";

const childrenList = [
  "Стоматологический осмотр - 2000 сом",
  "Анестезия во время лечения (включено пломбирование молочного зуба) - 3000 сом",
  "Пломбирование постоянного зуба - 6000 сом",
  "Расширенная пломбировка - 3000 сом",
  "Лечебная повязка - 3000 сом",
  "Удаление молочных зубов - 4000 сом",
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
