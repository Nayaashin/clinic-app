import Icons from "../images/sprite.svg";

const rootList = [
  "teeth 1-3 - from 550 to 650 PLN",
  "teeth 4-5 - from 650 - 750 PLN",
  "teeth 6.7 - from 750 - 850 PLN",
  "TREATMENT UNDER THE MICROSCOPE PLUS - 100% to the base price reendo (again root canal treatment) + 200 PLN to the starting price",
  "temporary restoration for root canal treatment - 80 PLN",
  "root canal removal - 300 PLN",
  "removal of a broken tool - 300 PLN",
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
