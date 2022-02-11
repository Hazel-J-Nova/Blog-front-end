import react, { useRef } from "react";
import NavItem from "./navItem";

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

// navToggle.addEventListener("click", () => {
//   document.body.classList.toggle("nav-open");
// });

let toggleNav = () => document.body.classList.toggle("nav-open");

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="img/devjane.png" alt="" />
      </div>
      <button
        className="nav-toggle"
        aria-label="toggle navigation"
        onClick={toggleNav}
      >
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <NavItem name="Home" />
          <NavItem name="Services" />
          <NavItem name="About Me" />
          <NavItem name="portfolio" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
