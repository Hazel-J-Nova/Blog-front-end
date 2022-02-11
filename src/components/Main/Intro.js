import react from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi I am <strong>Hazel Tate</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        Full Stack Dev
      </p>
      <img
        src="img/Hazel-01_50.png"
        alt="a picture of Hazel"
        class="intro__img"
      />
    </section>
  );
};

export default Intro;
