import Big_tooth from "../../../images/big-tooth.jpeg";
import ListItem from "./ListItem";
import style from "./Prices.module.scss";

const generalList = [
  "filling of light hardening - 220-320 PLN",
  "large-scale reconstruction (after, but with a canal) - 270-370 PLN",
  "reconstruction with the use of fiberglass - 370 PLN",
  "direct composite veneer - 350 PLN",
  "therapeutic bandage - 160 PLN",
  "overhead bleaching - 1000 PLN",
  "whitening of dead teeth: the first visa - 180 PLN, the next - 120 PLN",
];
const preventionList = [
  "scaling - 150 PLN",
  "sandblasting + scale + fluoridation - 250-300 PLN",
];
const rootList = [
  "teeth 1-3 - from 550 to 650 PLN",
  "teeth 4-5 - from 650 - 750 PLN",
  "teeth 6.7 - from 750 - 850 PLN",
  "TREATMENT UNDER THE MICROSCOPE PLUS - 100% to the base price reendo (again root canal treatment) + 200 PLN to the starting price",
  "temporary restoration for root canal treatment - 80 PLN",
  "root canal removal - 300 PLN",
  "removal of a broken tool - 300 PLN",
];
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
const surgeryList = [
  "surgical consultation - 200 PLN",
  "tooth extraction - 300-400 PLN",
  "difficult tooth removal (root separation) - 400-500 PLN",
  "surgical removal of the tooth (with the manufacture of a flap, suturing) - 500-700 PLN",
  "Surgical removal of a wisdom tooth - 400-800 PLN",
  "surgical removal of the retinal tooth 650-1000 PLN",
  "suture-surgical bandage - 100 PLN",
  "incision of the abscess - 200 PLN",
  "enucleation of the cyst - 400-1000 PLN",
  "hemisection - 300 PLN",
  "surgical closure of the orosinus fistula 300-500 PLN",
  "lifting of the maxillary sinus - 3000 PLN",
  "bone reconstruction (preparation for bone replacement) 2000-2500 PLN",
  "pocket cutting - 200 PLN",
  "removal of the focus on the oral mucosa (including histopathological examination) 200-500 PLN",
  "resection of 1-3 teeth - 700 PLN",
  "tooth resection 4-7 600-1000 PLN",
  "bridle trimming - 300 PLN",
  "surgical lengthening of the crown (1 tooth) - 250-300 PLN",
  "implant placement (the price includes the opening of the implant after the integration period) - 3600 PLN",
];
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
const childrenList = [
  "dental examination - 120 PLN",
  "anesthesia during treatment - included filling of a deciduous tooth - 160 PLN",
  "permanent tooth filling - 200-300 PLN",
  "extended sealing - 120 PLN",
  "therapeutic bandage - PLN 150impregnation - 120 PLN",
  "fluoridation - 120 PLN",
  "deciduous tooth removal - 150 PLN",
];
const xrayList = [
  "one tooth - 30 PLN",
  "panoramic - 100 PLN",
  "side heads / cephalometric - 100 PLN",
  "orthodontic package pano + cefalo - 150 PLN",
];
const Prices = () => {
  return (
    <div className="container">
      <h1 className={style.title}>Our Prices</h1>
      <span className={style.line}></span>
      <div className={style.wrap}>
        <ul className={style.parentList}>
          <ListItem
            title="General Dentistry"
            list={generalList}
            message="Anesthesia is included in the cost of procedures. `These prices are
        indicative, optional and are not an offer within the meaning of the
        first part of Article 66 of the Civil Code. The final cost is determined
        during a medical consultation and an individual treatment plan.`"
          />
          <span className={style.line2}></span>
          <ListItem
            title="Prevention"
            list={preventionList}
            message="`These prices are indicative, not mandatory and are not an offer within the meaning of Art. 66 § 1 CC. The final cost is determined during a medical consultation and the creation of an individual treatment plan.`"
          />
          <span className={style.line2}></span>
          <ListItem
            title="Endodontics / root canal treatment"
            list={rootList}
          />
          <span className={style.line2}></span>
          <ListItem
            title="Orthodontics"
            list={ortoList}
            message="`These prices are indicative, optional and are not an offer within the meaning of part one of Article 66 of the Civil Code. The final cost is determined during a medical consultation and an individual treatment plan.`"
          />
          <span className={style.line2}></span>
          <ListItem
            title="Surgery / implantology"
            list={surgeryList}
            message="`These prices are indicative, optional and are not a proposal in the sense of part one of Article 66 of the Civil Code. The final cost is determined during a medical consultation and an individual treatment plan.`"
          />
          <span className={style.line2}></span>
          <ListItem
            title="Prosthetics"
            list={prostheticsList}
            message="`These prices are approximate, optional and do not constitute an offer within the meaning of Part 1 of Article 66 of the Civil Code. The final cost is determined during a medical consultation and an individual treatment plan.`"
          />
          <span className={style.line2}></span>
          <ListItem
            title="Children's dentistry"
            list={childrenList}
            message="`These prices are indicative, optional and are not a proposal in the sense of part one of Article 66 of the Civil Code. The final cost is determined during a medical consultation and an individual treatment plan.`"
          />
          <span className={style.line2}></span>
          <ListItem
            title="X-ray / panoramic images"
            list={xrayList}
            message="`These prices are indicative, optional and are not a proposal in the sense of part one of Article 66 of the Civil Code. The final cost is determined during a medical consultation and an individual treatment plan.`"
          />
          {/* <ListItem itemTitle="SecondTitle" /> */}
          {/* <li className={style.parentListItem}>
            <a href="#" onClick={() => handlerClick()}>
              Parrent
            </a>
            <ul className={`${style.innerList} ${isOpen ? style.open : ""}`}>
              <li>NewPage</li>
            </ul>
          </li>
          <li className={style.parentListItem}>
            <a href="#" onClick={() => handlerClick()}>
              Parrent
            </a>
            <ul className={`${style.innerList} ${isOpen ? style.open : ""}`}>
              <li>NewPage</li>
            </ul>
          </li> */}
        </ul>
        <img src={Big_tooth} alt="" className={style.image} />
      </div>
    </div>
  );
};

export default Prices;
