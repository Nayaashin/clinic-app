import Icons from "../images/sprite.svg";

const xrayList = [
  "Один зуб - 600 сом",
  "Панорамный снимок - 2000 сом",
  "Цефалометрия - 2000 сом",
  "Ортодонтический пакет - 2300 сом ",
];

const PricesXrayPage = () => {
  return (
    <div className="container">
      <h1 className="prices_title">Рентген / Панорамный снимок</h1>
      <span className="prices_line"></span>
      <div>
        <ul className="prices_list">
          {xrayList.map((item) => (
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
        `Анестезия входит в стоимость процедур. `Эти цены
        ориентировочные, необязательные и не являются офертой. Окончательная стоимость определяется
        во время врачебной консультации и составления индивидуального плана лечения.`
      </p>
    </div>
  );
};

export default PricesXrayPage;
