const IndividualBlog = (props) => {
  return (
    <div>
      {" "}
      <section class="intro">
        <h1 class="section__title section__title--intro">{props.title}</h1>
        <p class="section__subtitle section__subtitle--intro">
          {props.subTitle}
        </p>
        <img src={props.imageUrl} alt={props.altText} class="intro__img" />
      </section>
      <div class="portfolio-item-individual">
        <p>{props.intro}</p>
        {props.body}
      </div>
    </div>
  );
};
