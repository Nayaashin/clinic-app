import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <p>
      no such page. Go <Link to="/" /> home
    </p>
  );
};

export default NotFoundPage;
