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
      <h1 className={style.title}>Услуги</h1>
      <span className={style.line}></span>

      <div className={style.general_wrapper}>
        <div className={style.part_list}>
          <div className={style.item}>
            <img src={general} className={style.img} alt="Общая стоматология" />
            <div>
              <h2>Общая стоматология</h2>
              <p className={style.text}>
                Для изготовления насадок мы используем самые современные
                материалы на рынке.
              </p>
            </div>
          </div>
          <div className={style.item}>
            <img src={kids} className={style.img} alt="Детская стоматология" />
            <div>
              <h2>Детская стоматология</h2>
              <p className={style.text}>
                Индивидуальный подход к маленьким пациентам: терпение и система поощрений.
                Мы сосредоточены на приобретении хороших привычек, которые окупятся в будущем.  
              </p>
            </div>
          </div>
          <div className={style.item}>
            <img src={orto} className={style.img} alt="Ортодонтия" />
            <div>
              <h2>Ортодонтия</h2>
              <p className={style.text}>
                Опыт полученный в медицинском университете позволяет нам помогать пациентам с выраженным нарушением прикуса.
              </p>
            </div>
          </div>
          <div className={style.item}>
            <img src={rent} className={style.img} alt="Рентген" />
            <div>
              <h2>Рентген</h2>
              <p className={style.text}>
                Мы делаем 3 вида рентгеновских снимков: панорамное фото всего зубного ряда,
                боковых головок и также фото отдельных зубов.
              </p>
            </div>
          </div>
        </div>
        <div className={style.part_list}>
          <div className={style.item}>
            <img src={prot} className={style.img} alt="Протезирование" />
            <div>
              <h2>Протезирование</h2>
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
