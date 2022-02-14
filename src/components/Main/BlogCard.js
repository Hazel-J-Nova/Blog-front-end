import "./BlogCard.scss";
import { Link } from "react-router-dom";

const Blog = (props) => {
  return (
    <div class="card">
      <div class="card__img">
        {/* <img src={props.imgUrl} alt="props.altText" /> */}
      </div>
      <div class="card__contenido">
        <h3 class="card__title">HEy this is text</h3>
        <div class="divider"></div>
        <h1 color="black">Hey blargh</h1>
        <Link to={`/blog/${props.blogLink}`} class="card__readbtn">
          read more
        </Link>
      </div>
    </div>
  );
};

export default Blog;
