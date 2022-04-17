import react from "react";

const AboutMe = () => {
  return (
    <section class="about-me" id="about">
      <h2 class="section__title section__title--about">Who I am</h2>
      <p class="section__subtitle section__subtitle--about">
        A developer based in OKC
      </p>
      <div class="about-me__body">
        <p>
          I came to development late in life but am absolutelty loving it. I
          spend hour after hour at my computer working on personal projects or
          learning new skills whenever I'm not working for my clients. It's most
          important thing I do
        </p>
        <p>
          When I am not coding I love to bike throughout OKC. I also have a
          passion for cooking
        </p>
      </div>
      <img src="img/hazel-2.jpg" class="about-me__img" alt="hey" />
    </section>
  );
};

export default AboutMe;
