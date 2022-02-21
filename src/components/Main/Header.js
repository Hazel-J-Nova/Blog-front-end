import react, { useEffect, useRef, useState } from "react";
import NavItem from "./navItem";
import Modal from "../Forms/Modal";
import UserForm from "../Forms/UserForm";
import { Link } from "react-router-dom";
import { logInUser, registerUser } from "../../utils/api";

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

// navToggle.addEventListener("click", () => {
//   document.body.classList.toggle("nav-open");
// });

let toggleNav = () => document.body.classList.toggle("nav-open");

const Header = ({ setUserState }) => {
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
          <button className="btn">
            <Link to="/"> home </Link>
          </button>
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
            </div>
          </div>
        </div>
      </nav>

      <Modal show={registerForm} title="Register" close={ToggleRegisterForm}>
        <UserForm
          apiCallToSubmitForm={registerUser}
          title="register"
          info={["username", "email", "password", "confirmPassword"]}
          toggle={ToggleRegisterForm}
        ></UserForm>
      </Modal>
      <Modal show={modal} title="Login" close={Toggle}>
        <UserForm
          info={["username", "password"]}
          apiCallToSubmitForm={logInUser}
          title="LogIn"
          toggle={Toggle}
        ></UserForm>
      </Modal>
    </div>
  );
};

export default Header;
