import { useState, useEffect, useContext } from "react";
import "./LoginForm.css";
import useOnClickOutside from "../../utils/Hooks/useOnClickOutside";
import FormField from "./FormField";
import { registerUser } from "../../utils/api";
import LogIn from "../../LogIn";
import { Context } from "../../App";
import Close from "../Icons/Close";
import "./UserForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const UserForm = ({ info, title, apiCallToSubmitForm, toggle, children }) => {
  const { userState, setUserState } = useContext(Context);

  const [hasSubmitted, setHasSubmitted] = useState();
  const [emailState, setEmailState] = useState(null);
  const [formInfo, setFormInfo] = useState({
    ...info,
  });
  const [buttonState, setButtonState] = useState(null);
  const handleChange = (event) => {
    setFormInfo((prevFormData) => {
      return { ...prevFormData, [event.target.name]: event.target.value };
    });
  };

  return (
    <>
      <div className="col-md-6 offset-md-3 col-xl-4 offset-xl-4 overlayStyles">
        <div className="card shadow  modal-position">
          <FontAwesomeIcon
            icon={faXmark}
            className="position-close"
            onClick={toggle}
          />
          ;
          <form>
            <div className="card-body form-container">
              <h5 className="card-title">{title}</h5>
              {children}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserForm;
