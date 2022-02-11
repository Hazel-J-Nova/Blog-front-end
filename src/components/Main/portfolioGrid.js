const portfolioGrid = (props) => {
  return (
    <section class="my--work" id="work">
      <h2 class="section__title">My Work</h2>
      <p class="section__subtitle">Some of my projects </p>
      <div class="portfolio">{props.children}</div>
    </section>
  );
};

export default portfolioGrid;
