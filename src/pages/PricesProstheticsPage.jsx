import Icons from "../images/sprite.svg";

const prostheticsList = [
  "prosthetics consultation - 150 PLN",
  "treatment plan - 200 zlotys (deducted from the final amount of work)",
  "postal and root mail - 350 PLN",
  "porcelain crown - 800 PLN",
  "All-ceramic crown - 1700 PLN",
  "temporary crown - 150 PLN",
  "tab, overlay, overlay - 800 PLN",
  "acrylic prosthesis - PLN 850",
  "skeletal prosthesis - 2000 PLN",
  "flexible prosthesis - 2000 PLN",
  "acrylic microprosthesis - PLN 400",
  "flexible microprosthesis - 900 PLN",
  "denture lining - 200 PLN",
  "repair of dentures - 170 PLN",
  "boxing tire - 400 PLN",
  "relaxation tire - 370 PLN",
];

const PricesProstheticsPage = () => {
  return (
    <div className="container">
      <h1 className="prices_title">Prosthetics</h1>
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
        `These prices are indicative, not mandatory and are not an offer within
        the meaning of Art. 66 § 1 CC. The final cost is determined during a
        medical consultation and the creation of an individual treatment plan.`
      </p>
    </div>
  );
};

export default PricesProstheticsPage;
