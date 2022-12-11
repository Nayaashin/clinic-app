import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <p>
      Страница не найдена. Вернуться на <Link to="/" /> Главная
    </p>
  );
};

export default NotFoundPage;
