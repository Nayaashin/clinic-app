import Icons from "../images/sprite.svg";

const ortoList = [
  "Консультация - 3000 сом",
  "Консультация с планом лечения - 6000 сом",
  "Металлические брекеты - 40000 сом",
  "ICONIX камера (золотая) - 47000 сом",
  "Эстетические брекеты - 57000 сом",
  "Металлические самолигирующие брекеты - 57000 сом",
  "Эстетические самолигирующиеся брекеты- 65000 сом",
];

const PricesOrthodonticsPage = () => {
  return (
    <div className="container">
      <h1 className="prices_title">Orthodontics</h1>
      <span className="prices_line"></span>
      <div>
        <ul className="prices_list">
          {ortoList.map((item) => (
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

export default PricesOrthodonticsPage;
