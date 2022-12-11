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
                Мы предлагаем множество видов протезирования, от фарфора до
                цельнокерамических изделий. Сотрудничество с зубным техником позволяет
                добиться идеального сочетания цветов. Лучшая работа - это
                невидимая работа, идентичная собственным зубам пациента.
              </p>
            </div>
          </div>
          <div className={style.item}>
            <img src={root} className={style.img} alt="Эндодонтия" />
            <div>
              <h2>Эндодонтия / Лечение корневых каналов</h2>
              <p className={style.text}>
                Работа под увеличением, с использованием эндодонтического микромотора.
                Вместе с точностью и настойчивостью наших врачей, обеспечена
                гарантия максимально точного пломбирования корневого канала. Осмотр на месте с рентгеном.
              </p>
            </div>
          </div>
          <div className={style.item}>
            <img src={impl} className={style.img} alt="Имплантология" />
            <div>
              <h2>Операция / Имплантология</h2>
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
