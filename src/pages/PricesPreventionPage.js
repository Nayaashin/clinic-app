import Icons from "../images/sprite.svg";

const preventionList = [
  "Глубокая чистка зубов - 3000 сом",
  "Пескоструйная стоматология + Скейлинг зубов - 6000 сом",
];

const PricesPreventionPage = () => {
  return (
    <div className="container">
      <h1 className="prices_title">Профилактика</h1>
      <span className="prices_line"></span>
      <div>
        <ul className="prices_list">
          {preventionList.map((item) => (
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
        `Анестезия входит в стоимость процедур. Эти цены
        ориентировочные, необязательные и не являются офертой. Окончательная стоимость определяется
        во время врачебной консультации и составления индивидуального плана лечения.`
      </p>
    </div>
  );
};

export default PricesPreventionPage;
