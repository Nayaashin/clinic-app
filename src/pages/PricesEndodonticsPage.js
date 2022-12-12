import Icons from "../images/sprite.svg";

const rootList = [
  "1-3 зуба - 13000 сом",
  "4-5 зубов - 15000 сом",
  "6-7 зубов - 17000 сом",
  "ЛЕЧЕНИЕ ПОД МИКРОСКОПОМ ПЛЮС по базовой цене (повторное лечение корневых каналов - 4000 cом)",
  "Временная реставрация для лечения корневых каналов",
  "Удаление корневых каналов - 6000 сом",
  "Удаление сломанного зуба - 6000 сом",
];

const PricesEndodonticsPage = () => {
  return (
    <div className="container">
      <h1 className="prices_title">Эндодонтия / Л
      ечение корневых каналов</h1>
      <span className="prices_line"></span>
      <div>
        <ul className="prices_list">
          {rootList.map((item) => (
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
    </div>
  );
};

export default PricesEndodonticsPage;
