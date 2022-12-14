import Icons from "../images/sprite.svg";

const surgeryList = [
  "Хирургическая консультация - 4000 сом",
  "Удаление зуба- 300-400 PLN",
  "Усложненное удаление зуба (отделение корня) - 8000 сом",
  "хирургическое удаление зуба (с изготовлением лоскута) 10000 сом",
  "Удадение зуба мудрости хирургическим путем - 15000 сом",
  "хирургическое удаление сетчатки зуба -20000 сом",
  "Шовно-хирургический бинт  - 4000 сом",
  "Вскрытие зуба - 3000 сом",
  "Гемисекция зуба - 6000 сом",
  "Хирургическое закрытие оросиновидного свища 10000 сом",
  "Подтяжка верхнечелюстной пазухи  - 57000 сом",
  "Костная реконструкция (подготовка к замене кости) - 47000 сом",
  "Удаление обостренного очага на слизистой оболочке полости рта (включая гистологическое исследование) - 10000 сом",
  "Хирургическое удлинение коронки (1 зуб) - 6000 сом",
];

const PricesSurgeryPage = () => {
  return (
    <div className="container">
      <h1 className="prices_title">Хирургия / Имплантология</h1>
      <span className="prices_line"></span>
      <div>
        <ul className="prices_list">
          {surgeryList.map((item) => (
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
      во время врачебной консультации и составления индивидуального плана лечения`.
      </p>
    </div>
  );
};

export default PricesSurgeryPage;
