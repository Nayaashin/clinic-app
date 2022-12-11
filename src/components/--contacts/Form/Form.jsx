import { nanoid } from "@reduxjs/toolkit";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import s from "./Form.module.scss";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // const dispatch = useDispatch();
  // const items = useSelector(getItems);

  const nameInputId = useRef(nanoid());
  const emailInputId = useRef(nanoid());
  const messageInputId = useRef(nanoid());

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newObj = {
      name,
      email,
      message,
    };

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Feedback form
        </h1>
        <p className={s.text}>Fields marked with * are required</p>
        <label className={s.label} htmlFor={nameInputId.current}>
          Name *
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters"
            onChange={handleChange}
            id={nameInputId}
            required
          />
        </label>

        <label className={s.label} htmlFor={emailInputId.current}>
          Email *
          <input
            className={s.input}
            type="tel"
            name="email"
            value={email}
            onChange={handleChange}
            id={emailInputId}
          />
        </label>

        <label className={s.label} htmlFor={messageInputId.current}>
          Message...
          <input
            className={s.textarea}
            name="message"
            value={message}
            onChange={handleChange}
          ></input>
        </label>
        <button className={s.formBtn} type="submit" disabled={!email && !name}>
          Send
        </button>
      </form>
    </>
  );
};

export default Form;
