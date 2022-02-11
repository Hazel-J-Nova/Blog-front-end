import react from "react";
let toggleNav = () => document.body.classList.toggle("nav-open");

const NavItem = (props) => {
  return (
    <li className="nav__item">
      <a href={"#" + props.name} className="nav__link" onClick={toggleNav}>
        {props.name}
      </a>
    </li>
  );
};

export default NavItem;
