const PortfolioItem = (props) => {
  return (
    <a href={props.link} class="portfolio__item">
      <figure>
        <img src={props.image} alt={props.alt} class="portfolio__img" />
        {props.projectName}
      </figure>
    </a>
  );
};

export default PortfolioItem;
