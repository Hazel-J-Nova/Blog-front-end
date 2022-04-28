import "./Intro.css";
import hazelProfile from "../../Public/Hazel_Profile.jpg";

const Intro = () => {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi I am <strong>Hazel Tate</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        Full Stack Dev
      </p>
      <img src={hazelProfile} alt="Hazel looking ahead" class="intro__img" />
    </section>
  );
};

export default Intro;
