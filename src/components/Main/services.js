const Services = () => {
  return (
    <section class="my-services" id="services">
      <h2 class="section__title section__title--services">What I do</h2>
      <div class="services">
        <div class="service first">
          <h3>Front end</h3>
          <p>
            "As A front end designer I am always looking for ways to make
            clients dreams become a reality. My experince in CSS HTML and
            Javascript makes me perfectly suited for any task"
          </p>
        </div>
        <div class="service">
          <h3>Back End</h3>
          <p>
            I love working with logic and Databases. This is what truly speaks
            to me. I have experince with both Express and Mongodb as well as
            Django and Flask
          </p>
        </div>
        <div class="service">
          <h3>Design</h3>
          <p>
            Design is such an interesting challenge. I love going through and
            finding the perfect font, the most exact layout and the colors that
            woll make a site pop. working with clients to take the bare bones of
            a project into a full design is so rewarding
          </p>
        </div>
      </div>
      <a href="work" class="btn">
        My Work
      </a>
    </section>
  );
};

export default Services;
