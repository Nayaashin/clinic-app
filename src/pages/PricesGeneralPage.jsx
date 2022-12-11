import Icons from "../images/sprite.svg";

const generalList = [
  "filling of light hardening - 220-320 PLN",
  "large-scale reconstruction (after, but with a canal) - 270-370 PLN",
  "reconstruction with the use of fiberglass - 370 PLN",
  "direct composite veneer - 350 PLN",
  "therapeutic bandage - 160 PLN",
  "overhead bleaching - 1000 PLN",
  "whitening of dead teeth: the first visa - 180 PLN, the next - 120 PLN",
];

const PricesGeneralPage = () => {
  return (
    <div className="container">
      <h1 className="prices_title">General Dentistry</h1>
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
        Anesthesia is included in the cost of procedures. `These prices are
        indicative, optional and are not an offer within the meaning of the
        first part of Article 66 of the Civil Code. The final cost is determined
        during a medical consultation and an individual treatment plan.`
      </p>
    </div>
  );
};

export default PricesGeneralPage;
