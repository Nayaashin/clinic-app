import Icons from "../images/sprite.svg";

const ortoList = [
  "Consultation - 200 PLN",
  "Consultation with a treatment plan - 300 PLN",
  "Metal braces - 2000 PLN",
  "ICONIX camera (gold) - 2500 PLN",
  "Aesthetic braces - 3000 PLN",
  "Metal self-ligating braces - 3000 PLN",
  "Aesthetic self-ligating braces - 4000 PLN",
  "Removable camera 600-800 PLN",
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
        `These prices are indicative, optional and are not an offer within the
        meaning of the first part of Article 66 of the Civil Code. The final
        cost is determined during a medical consultation and an individual
        treatment plan.`
      </p>
    </div>
  );
};

export default PricesOrthodonticsPage;
