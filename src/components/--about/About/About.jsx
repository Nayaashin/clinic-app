import style from "./About.module.scss";

const About = () => {
  return (
    <div className="container">
      <div className={style.wrap}>
        <p className={style.img}></p>
        <div className={style.disc}>
          <h1 className={style.title}>Welcome to our office.</h1>
          <span className={style.line}></span>
          <p className={style.text}>
            We are a team that provides services in the entire field of
            dentistry. In comfortable conditions, we will take care of the smile
            of all patients - from babies to the elderly.
          </p>
          <p className={style.text}>
            Interdisciplinary cooperation between us - doctors of different
            specialties - allows us to treat complex cases without sending the
            patient back. We are distinguished by an individual, "human
            approach" to patients and their problems, which they tell us about.
          </p>
          <p className={style.text}>
            The services we offer are performed using the highest quality
            materials and equipment. Fear of pain and the dentist can now be
            left at the door ... We just love our work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
