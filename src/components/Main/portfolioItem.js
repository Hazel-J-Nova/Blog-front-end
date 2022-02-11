import react, { useState, useEffect } from "react";

const portfolioItem = (props) => {
  [portfolioState, callPortfolio] = useState({});
  return (
    <a href={props.link} class="portfolio__item">
      <figure>
        <img src={props.image} alt={props.alt} class="portfolio__img" />
        {props.projectName}
      </figure>
    </a>
  );
};
