import Icons from "../images/sprite.svg";

const PricesPageLekalo = (props) => {
  return (
    <div className="container">
      <h1 className="prices_title">{props.title}</h1>
      <span className="prices_line"></span>
      <div>
        <ul className="prices_list">
          {props.list.map((item) => (
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
      <p className="prices_disc">{props.message}</p>
    </div>
  );
};

export default PricesPageLekalo;
