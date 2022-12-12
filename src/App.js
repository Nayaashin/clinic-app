import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Nav from "./components/--navigation/Navigation/Nav";
import ContactsPage from "./pages/ContactsPage";
import AboutPage from "./pages/AboutPage";
import OffersPage from "./pages/OffersPage";
import PricesPage from "./pages/PricesPage";
import PricesGeneralPage from "./pages/PricesGeneralPage";
import PricesPreventionPage from "./pages/PricesPreventionPage";
import PricesEndodonticsPage from "./pages/PricesEndodonticsPage";
import PricesOrthodonticsPage from "./pages/PricesOrthodonticsPage";
import PricesSurgeryPage from "./pages/PricesSurgeryPage";
import PricesProstheticsPage from "./pages/PricesProstheticsPage";
import PricesChildrenPage from "./pages/PricesChildrenPage";
import PricesXrayPage from "./pages/PricesXrayPage";
import PricesPageLekalo from "./pages/PricesPageLekalo";
import PricesAllPage from "./pages/PricesAllPage";
import GalleryPage from "./pages/GalleryPage";

const generalList = [
  "Заливка светового отверждения - 6000 сом",
  "Масштабная реконструкция (после, но с каналом) - 7000 сом",
  "Реконструкция с применением пластика - 7000 сом",
  "Прямые композитные виниры - 5000 сом",
  "Терапевчический бандаж - 20000 сом",
  "Отбеливание мертвых зубов: первое посещение - 4000 сом, последущее - 2000 сом",
];
const preventionList = [
  "Глубокая чистка зубов - 3000 сом",
  "Пескоструйная стоматология + Скейлинг зубов - 6000 сом",
];
const rootList = [
  "1-3 зуба - 13000 сом",
  "4-5 зубов - 15000 сом",
  "6-7 зубов - 17000 сом",
  "ЛЕЧЕНИЕ ПОД МИКРОСКОПОМ ПЛЮС по базовой цене (повторное лечение корневых каналов - 4000 cом)",
  "Временная реставрация для лечения корневых каналов",
  "Удаление корневых каналов - 6000 сом",
  "Удаление сломанного зуба - 6000 сом",
];
const ortoList = [
  "Консультация - 3000 сом",
  "Консультация с планом лечения - 6000 сом",
  "Металлические брекеты - 40000 сом",
  "ICONIX камера (золотая) - 47000 сом",
  "Эстетические брекеты - 57000 сом",
  "Металлические самолигирующие брекеты - 57000 сом",
  "Эстетические самолигирующиеся брекеты- 65000 сом",
];
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
const prostheticsList = [
  "Консультация по протезированию - 3000 сом",
  "План лечения (вычитается из итоговой суммы работы) - 4000 сом",
  "Цельнокерамическая коронка - 32000 сом",
  "Временная коронка - 3000 сом",
  "Акриловый протез - 17000 сом",
  "Скелетный протез - 40000 сом",
  "Прокладка зубного протеза - 5000 сом",
  "Ремонт зубных протезов - 3000 сом",
];
const childrenList = [
  "Стоматологический осмотр - 2000 сом",
  "Анестезия во время лечения (включено пломбирование молочного зуба) - 3000 сом",
  "Пломбирование постоянного зуба - 6000 сом",
  "Расширенная пломбировка - 3000 сом",
  "Лечебная повязка - 3000 сом",
  "Удаление молочных зубов - 4000 сом",
];
const xrayList = [
  "Один зуб - 600 сом",
  "Панорамный снимок - 2000 сом",
  "Цефалометрия - 2000 сом",
  "Ортодонтический пакет - 2300 сом ",
];

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="offers" element={<OffersPage />} />
        {/* <Route path="prices" element={<PricesPage />} /> */}
        <Route>
          {/* <PricesAllPage /> */}
          <Route
            path="/prices/general"
            element={
              <PricesPageLekalo
                title="Общая стоматология"
                list={generalList}
                message="Анестезия входит в стоимость процедур. `Эти цены
                ориентировочные, необязательные и не являются офертой. Окончательная стоимость определяется
                во время врачебной консультации и составления индивидуального плана лечения.`"
              />
            }
          />
          <Route
            path="/prices/prevention"
            element={
              <PricesPageLekalo
                title="Профилактика"
                list={preventionList}
                message="`Данные цены являются ориентировочными, не обязательными и не являются офертой. Окончательная стоимость определяется в ходе врачебной консультации и составления индивидуального плана лечения.`"
              />
            }
          />
          <Route
            path="/prices/endodontics"
            element={
              <PricesPageLekalo
                title="Эндодонтия/Лечение корневых каналов"
                list={rootList}
                message="`Данные цены являются ориентировочными, не обязательными и не являются офертой. Окончательная стоимость определяется в ходе врачебной консультации и составления индивидуального плана лечения.`"
              />
            }
          />
          <Route
            path="/prices/orthodontics"
            element={
              <PricesPageLekalo
                title="Ортодонтия"
                list={ortoList}
                message="`Данные цены являются ориентировочными, не обязательными и не являются офертой. Окончательная стоимость определяется в ходе врачебной консультации и составления индивидуального плана лечения.`"
              />
            }
          />
          <Route
            path="/prices/surgery"
            element={
              <PricesPageLekalo
                title="Хирургия / Имплантология"
                list={surgeryList}
                message="`Данные цены являются ориентировочными, не обязательными и не являются офертой. Окончательная стоимость определяется в ходе врачебной консультации и составления индивидуального плана лечения.`"
              />
            }
          />
          <Route
            path="/prices/prosthetics"
            element={
              <PricesPageLekalo
                title="Протезирование"
                list={prostheticsList}
                message="`Данные цены являются ориентировочными, не обязательными и не являются офертой. Окончательная стоимость определяется в ходе врачебной консультации и составления индивидуального плана лечения.`"
              />
            }
          />
          <Route
            path="/prices/children"
            element={
              <PricesPageLekalo
                title="Десткая стоматология"
                list={childrenList}
                message="`Данные цены явдляются ориентировочными, не обязательными и не являются офертой. Окончательная стоимость определяется в ходе врачебной консультации и составления индивидуального плана лечения.`"
              />
            }
          />
          <Route
            path="/prices/xray"
            element={
              <PricesPageLekalo
                title="Рентгеновские/панорамные снимки"
                list={xrayList}
                message="`Данные цены явдляются ориентировочными, не обязательными и не являются офертой. Окончательная стоимость определяется в ходе врачебной консультации и составления индивидуального плана лечения.`"
              />
            }
          />
          {/* <Route path="/prices/general" element={<PricesGeneralPage />} />
          <Route path="/prices/prevention" element={<PricesPreventionPage />} />
          <Route
            path="/prices/endodontics"
            element={<PricesEndodonticsPage />}
          />
          <Route
            path="/prices/orthodontics"
            element={<PricesOrthodonticsPage />}
          />
          <Route path="/prices/surgery" element={<PricesSurgeryPage />} />
          <Route
            path="/prices/prosthetics"
            element={<PricesProstheticsPage />}
          />
          <Route path="/prices/children" element={<PricesChildrenPage />} />
          <Route path="/prices/xray" element={<PricesXrayPage />} /> */}
        </Route>
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
