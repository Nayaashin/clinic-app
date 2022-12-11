import { useState } from "react";
import style from "./PostFilter.module.scss";

const PostFilter = ({ postQuery, latest, setSerchParams }) => {
  const [search, setSearch] = useState(postQuery);
  const [checked, setChecked] = useState(latest);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.search.value;
    const isLatest = form.latest.checked;

    const params = {};
    if (query.length) params.post = query;
    if (isLatest) params.latest = true;

    setSerchParams(params);
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={style.input}
      />
      <label className={style.label}>
        <input
          type="checkbox"
          name="latest"
          value={checked}
          onChange={(e) => setChecked(e.target.checked)}
          className={style.checkbox}
        />{" "}
        New only
      </label>
      <input type="submit" value="Search" className={style.btn} />
    </form>
  );
};

export default PostFilter;
