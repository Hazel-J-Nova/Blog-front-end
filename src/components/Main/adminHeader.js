import { Link } from "react-router-dom";

const adminHeader = () => {
  return (
    <ul>
      <li>
        <button className="btn ">
          <Link to="/admin/blog">Blogs</Link>{" "}
        </button>
      </li>
      <li>
        <button className="btn ">
          <Link to="/admin/portfolio">Portfolio</Link>{" "}
        </button>
      </li>
    </ul>
  );
};

export default adminHeader;
