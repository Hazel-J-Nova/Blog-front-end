import react, { useEffect, useRef, useState, useContext } from "react";
import Modal from "../Forms/Modal";
import UserForm from "../Forms/UserForm";
import { Link } from "react-router-dom";
import { logInUser, registerUser } from "../../utils/api";
import { Context } from "../../App";
import FormField from "../Forms/FormField.js";
import useModal from "../../utils/Hooks/useModal";
import validators from "../../utils/validators";
import useInput from "../../utils/Hooks/useInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Bars from "../Icons/Bars";
import isObjectEmpty from "../../utils/isObjectEmpty";
import adminHeader from "./adminHeader";

const Header = () => {
  const ctx = useContext(Context);
  const [showNavState, setShowNavState] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPasswordState, setShowPasswordState] = useState(false);
  const [compareState, setCompareState] = useState(true);
  const [errorState, setErrorState] = useState("");

  const togglePassword = () => setShowPasswordState(!showPasswordState);
  const manageLoginModal = useModal();
  const manageRegisterModal = useModal();
  const manageEmailInput = useInput(validators.validateEmail);
  const managePasswordInput = useInput(validators.validateConfirmPassword);
  const manageConfirmPasswordInput = useInput(
    validators.validateConfirmPassword
  );
  const manageUserNameInput = useInput(validators.validateUserName);

  useEffect(() => {
    if (
      manageConfirmPasswordInput.valueState !==
        managePasswordInput.valueState &&
      manageConfirmPasswordInput.isTouchedState === true &&
      managePasswordInput.isTouchedState === true
    ) {
      setCompareState(false);
    } else {
      setCompareState(true);
    }
  }, [manageConfirmPasswordInput, manageConfirmPasswordInput]);

  useEffect(() => {
    manageConfirmPasswordInput.setValueState("");
    managePasswordInput.setValueState("");
    manageEmailInput.setValueState("");
    manageUserNameInput.setValueState("");
  }, []);

  useEffect(() => {
    setIsLoggedIn(isObjectEmpty(ctx.userState));
    setIsAdmin(!isObjectEmpty(ctx.userState) && ctx.userState.admin === true);
  }, [ctx.userState]);

  const eye = <FontAwesomeIcon icon={faEye} onClick={togglePassword} />;
  const eyeSlash = (
    <FontAwesomeIcon icon={faEyeSlash} onClick={togglePassword} />
  );

  return (
    <Context.Consumer>
      {(ctx) => {
        return (
          <div>
            <nav class="navigation">
              <button className="btn">
                <Link to="/"> home </Link>
              </button>
              <button
                className="hamburger"
                onClick={() => {
                  setShowNavState(!showNavState);
                }}
              >
                {Bars}
              </button>
              <div
                className={
                  showNavState
                    ? "navigation-menu expanded dropdown-shadow"
                    : " navigation-menu"
                }
              >
                <ul>
                  {isAdmin && <adminHeader></adminHeader>}
                  {!isLoggedIn && (
                    <ul>
                      <li>
                        <button
                          className="btn "
                          onClick={manageLoginModal.Toggle}
                        >
                          sign up
                        </button>
                      </li>
                      <li>
                        <button
                          className="btn "
                          onClick={manageRegisterModal.Toggle}
                        >
                          sign up
                        </button>
                      </li>
                    </ul>
                  )}
                </ul>
              </div>
            </nav>
            <Modal
              display={manageRegisterModal.modal}
              title="Register"
              close={manageRegisterModal.Toggle}
              className={manageRegisterModal.modalClasses}
            >
              <UserForm title="register" toggle={manageRegisterModal.Toggle}>
                {errorState && <p>{errorState}</p>}
                <FormField
                  label="Enter your email"
                  id="email"
                  type="email"
                  onBlur={manageEmailInput.onBlur}
                  onChange={manageEmailInput.valueChangeHandler}
                  value={manageEmailInput.valueState}
                  hasError={manageEmailInput.hasError}
                  errortext="please enter a valid email address"
                />
                <FormField
                  label="User Name"
                  id="username"
                  type="email"
                  onBlur={manageEmailInput.onBlur}
                  onChange={manageUserNameInput.valueChangeHandler}
                  value={manageUserNameInput.valueState}
                  errortext="Invalid User Name"
                />
                <FormField
                  label="Password"
                  id="password"
                  type={showPasswordState ? "text" : "password"}
                  onBlur={managePasswordInput.onBlur}
                  onChange={managePasswordInput.valueChangeHandler}
                  value={managePasswordInput.valueState}
                  icon={showPasswordState ? eye : eyeSlash}
                  errortext="Invalid Password"
                ></FormField>
                <FormField
                  className="input-field"
                  label="comfirm password"
                  id="confirm password"
                  type={showPasswordState ? "text" : "password"}
                  onBlur={manageConfirmPasswordInput.onBlur}
                  onChange={manageConfirmPasswordInput.valueChangeHandler}
                  value={manageConfirmPasswordInput.valueState}
                  showPassword={togglePassword}
                  icon={showPasswordState ? eye : eyeSlash}
                />
                {!compareState && <p>passwords must match</p>}
                <button
                  className="btn"
                  onClick={(e) => {
                    e.preventDefault();
                    let response = registerUser(
                      manageUserNameInput.valueState,
                      manageEmailInput.valueState,
                      managePasswordInput.valueState
                    );
                    ctx.setUserState(response);
                    if (!ctx.userState) {
                      setErrorState("Sign up failed, please try again");
                      manageConfirmPasswordInput.setValueState("");
                      managePasswordInput.setValueState("");
                      manageEmailInput.setValueState("");
                      manageUserNameInput.setValueState("");
                    } else {
                      manageConfirmPasswordInput.setValueState("");
                      managePasswordInput.setValueState("");
                      manageEmailInput.setValueState("");
                      manageUserNameInput.setValueState("");
                      manageRegisterModal.Toggle();
                    }
                  }}
                >
                  Sign Up
                </button>
              </UserForm>
            </Modal>

            <Modal
              display={manageLoginModal.modal}
              title="Login"
              close={manageLoginModal.Toggle}
            >
              <UserForm
                apiCallToSubmitForm={logInUser}
                title="LogIn"
                toggle={manageLoginModal.Toggle}
              >
                <FormField
                  label="Enter your email"
                  id="email"
                  type="email"
                  onBlur={manageEmailInput.onBlur}
                  onChange={manageEmailInput.onChange}
                  value={manageEmailInput.value}
                />
                <FormField
                  label="Password"
                  id="password"
                  type={showPasswordState ? "text" : "password"}
                  onBlur={managePasswordInput.onBlur}
                  onChange={managePasswordInput.onChange}
                  value={managePasswordInput.value}
                  icon={showPasswordState ? eye : eyeSlash}
                />

                <div>
                  <button
                    className="btn"
                    onClick={(e) => {
                      e.preventDefault();
                      ctx.setUserState("Hazel");
                      console.log(ctx.userState);
                      // logInUser(
                      //   loginFormTotalState.userName,
                      //   loginFormTotalState.password
                      // );
                    }}
                  >
                    login
                  </button>
                </div>
                <div>
                  <button className="btn"> Forgot Password</button>
                  <button className="btn"> Forgot Usename</button>
                </div>
                <div></div>
              </UserForm>
            </Modal>
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default Header;
