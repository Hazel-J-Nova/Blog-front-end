import React, { useState, useRef, useEffect } from "react";
import Modal from "./components/Forms/Modal";
import LoginForm from "./components/Forms/LogInForm";
import RegisterForm from "./components/Forms/RegisterForm";

export default function LogIn({ children, onClose, open }) {
  const loginFormInfo = {
    userName: "",
    password: "",
  };
  const registerFormInfo = ["username, email, password, confirmPassword"];
  console.log(registerFormInfo);
  const [modal, setModal] = useState(false);
  const [registerForm, setRegisterForm] = useState(false);
  const Toggle = () => {
    setModal((previosModalState) => {
      return !previosModalState;
    });
  };
  const ToggleRegisterForm = () => {
    setRegisterForm((previosModalState) => {
      return !previosModalState;
    });
  };
  return (
    <div className="App">
      <span>
        <button className="clickme" onClick={Toggle}>
          Login
        </button>
        <button className="clickme" onClick={ToggleRegisterForm}>
          Register
        </button>
      </span>

      <Modal show={modal} title="My Modal" close={Toggle} id="login">
        <LoginForm sentFormInfo={loginFormInfo} />
      </Modal>
      <Modal show={registerForm} title="Register" close={ToggleRegisterForm}>
        <RegisterForm
          info={["username", "email", "password", "confirmPassword"]}
        ></RegisterForm>
      </Modal>
    </div>
  );
}
