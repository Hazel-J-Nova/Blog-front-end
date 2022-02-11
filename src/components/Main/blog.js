import "./blog.scss";

const Blog = (props) => {
  return (
    <div class="card">
      <div class="card__img">
        <img src={props.imgURL} alt="props.altText" />
      </div>
      <div class="card__contenido">
        <h3 class="card__title">{props.blogTitle}</h3>
        <div class="divider"></div>
        <p class="card__text">{props.introText}</p>
        <a href={props.blogLink} class="card__readbtn">
          read more
        </a>
      </div>
    </div>
  );
};

export default Blog;
