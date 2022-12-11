import general from "../../images/offers/general.png";
import kids from "../../images/offers/kids.png";
import orto from "../../images/offers/orto.png";
import rent from "../../images/offers/rent.png";
import prot from "../../images/offers/prot.png";
import root from "../../images/offers/root.png";
import impl from "../../images/offers/impl.png";
import style from "./Offers.module.scss";

const Offers = () => {
  return (
    <div className="container">
      <h1 className={style.title}>Our offers</h1>
      <span className={style.line}></span>

      <div className={style.general_wrapper}>
        <div className={style.part_list}>
          <div className={style.item}>
            <img src={general} className={style.img} alt="General dentistry" />
            <div>
              <h2>General dentistry</h2>
              <p className={style.text}>
                For the manufacture of fildivngs, we use the most modern
                materials on the market.
              </p>
            </div>
          </div>
          <div className={style.item}>
            <img src={kids} className={style.img} alt="Children's dentistry" />
            <div>
              <h2>Children's dentistry</h2>
              <p className={style.text}>
                Individual approach to small patients, patience, reward system.
                We focus on acquiring good habits that will pay off in the
                future.
              </p>
            </div>
          </div>
          <div className={style.item}>
            <img src={orto} className={style.img} alt="Orthodontics" />
            <div>
              <h2>Orthodontics</h2>
              <p className={style.text}>
                Experience at the Medical University allows us to help patients
                with severe malocclusion.
              </p>
            </div>
          </div>
          <div className={style.item}>
            <img src={rent} className={style.img} alt="x-ray" />
            <div>
              <h2>x-ray</h2>
              <p className={style.text}>
                Мы делаем 3 вида фотографий: панорамное фото всего зубного ряда,
                боковых головок и фото отдельных зубов.
              </p>
            </div>
          </div>
        </div>
        <div className={style.part_list}>
          <div className={style.item}>
            <img src={prot} className={style.img} alt="Prosthetics" />
            <div>
              <h2>Prosthetics</h2>
              <p className={style.text}>
                We offer many types of prosthetic work, from porcelain to
                all-ceramic. Collaboration with a dental technician allows you
                to achieve the perfect combination of colors. The best work is
                an invisible work, identical to the patient's own teeth.
              </p>
            </div>
          </div>
          <div className={style.item}>
            <img src={root} className={style.img} alt="Endodontics" />
            <div>
              <h2>Endodontics / Root Canal Treatment</h2>
              <p className={style.text}>
                Working under magnification, using an endodontic micromotor,
                together with the precision and perseverance of our doctors, is
                the guarantee of the most accurate fildivng of the root canal
                system. On-site inspection with x-rays.
              </p>
            </div>
          </div>
          <div className={style.item}>
            <img src={impl} className={style.img} alt="Implantology" />
            <div>
              <h2>Surgery / Implantology</h2>
              <p className={style.text}>
                Выполняем все виды хирургических вмешательств с имплантатами.
                Многолетний опыт работы в отделении челюстно-лицевой хирургии,
                самоконтроль и твердая рука гарантируют безопасность процедуры.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
