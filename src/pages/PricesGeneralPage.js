import Icons from "../images/sprite.svg";

const generalList = [
  "Заливка светового отверждения - 6000 сом",
  "Масштабная реконструкция (после, но с каналом) - 7000 сом",
  "Реконструкция с применением пластика - 7000 сом",
  "Прямые композитные виниры - 5000 сом",
  "Терапевчический бандаж - 20000 сом",
  "Отбеливание мертвых зубов: первое посещение - 4000 сом, последущее - 2000 сом",
];

const PricesGeneralPage = () => {
  return (
    <div className="container">
      <h1 className="prices_title">Общая стоматология</h1>
      <span className="prices_line"></span>
      <div>
        <ul className="prices_list">
          {generalList.map((item) => (
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
      Анестезия входит в стоимость процедур. `Эти цены
      ориентировочные, необязательные и не являются офертой. Окончательная стоимость определяется
      во время врачебной консультации и составления индивидуального плана лечения.`
      </p>
    </div>
  );
};

export default PricesGeneralPage;
