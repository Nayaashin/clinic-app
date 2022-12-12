import Icons from "../images/sprite.svg";

const prostheticsList = [
  "Консультация по протезированию - 3000 сом",
  "План лечения (вычитается из итоговой суммы работы) - 4000 сом",
  "Цельнокерамическая коронка - 32000 сом",
  "Временная коронка - 3000 сом",
  "Акриловый протез - 17000 сом",
  "Скелетный протез - 40000 сом",
  "Прокладка зубного протеза - 5000 сом",
  "Ремонт зубных протезов - 3000 сом",
];

const PricesProstheticsPage = () => {
  return (
    <div className="container">
      <h1 className="prices_title">Протезирование</h1>
      <span className="prices_line"></span>
      <div>
        <ul className="prices_list">
          {prostheticsList.map((item) => (
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

export default PricesProstheticsPage;
