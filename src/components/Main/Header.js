import react, { useRef } from "react";
import NavItem from "./navItem";

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

// navToggle.addEventListener("click", () => {
//   document.body.classList.toggle("nav-open");
// });

let toggleNav = () => document.body.classList.toggle("nav-open");

const Header = (props) => {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          Home
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="navbar-nav ml-auto">
            <button className="btn ">
              <a class="nav-link" href="/users/register">
                sign up
              </a>
            </button>
            <button className="btn ">
              <a class="nav-link" href="/users/register">
                sign up
              </a>
            </button>

            <button className="btn ">
              <a class="nav-link" href="/users/register">
                sign up
              </a>
            </button>
            <button className="btn ">
              <a class="nav-link" href="/users/register">
                sign up
              </a>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
