import react, { useEffect, useRef, useState } from "react";
import NavItem from "./navItem";
import Modal from "../Forms/Modal";
import UserForm from "../Forms/UserForm";
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

// navToggle.addEventListener("click", () => {
//   document.body.classList.toggle("nav-open");
// });

let toggleNav = () => document.body.classList.toggle("nav-open");

const Header = (props) => {
  const registerFormInfo = ["username", "email", "password", "confirmPassword"];

  const [modal, setModal] = useState(false);
  const [registerForm, setRegisterForm] = useState(false);
  const Toggle = () => {
    setModal((previosModalState) => {
      return !previosModalState;
    });
  };
  const loginFormInfo = ["User Name", "Password"];
  const ToggleRegisterForm = () => {
    setRegisterForm((previosModalState) => {
      return !previosModalState;
    });
  };
  return (
    <div>
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
              <span>
                <button className="btn " onClick={Toggle}>
                  log in
                </button>
              </span>
              <span>
                <button className="btn " onClick={ToggleRegisterForm}>
                  sign up
                </button>
              </span>

              <button className="btn ">
                <a class="nav-link" href="/users/register">
                  sign up
                </a>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Modal show={registerForm} title="Register" close={ToggleRegisterForm}>
        <UserForm
          info={["username", "email", "password", "confirmPassword"]}
        ></UserForm>
      </Modal>
      <Modal show={modal} title="Login" close={Toggle}>
        <UserForm info={["username", "password"]} title="LogIn"></UserForm>
      </Modal>
    </div>
  );
};

export default Header;
