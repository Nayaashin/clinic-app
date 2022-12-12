import Icons from "../images/sprite.svg";

const preventionList = [
  "scaling - 150 PLN",
  "sandblasting + scale + fluoridation - 250-300 PLN",
];

const PricesPreventionPage = () => {
  return (
    <div className="container">
      <h1 className="prices_title">Prevention</h1>
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
        `These prices are indicative, not mandatory and are not an offer within
        the meaning of Art. 66 § 1 CC. The final cost is determined during a
        medical consultation and the creation of an individual treatment plan.`
      </p>
    </div>
  );
};

export default PricesPreventionPage;
