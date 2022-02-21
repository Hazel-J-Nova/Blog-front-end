import { useState, useEffect, useContext } from "react";
import "./LoginForm.css";
import useOnClickOutside from "../../utils/Hooks/useOnClickOutside";
import FormField from "./formField";
import { registerUser } from "../../utils/api";
import LogIn from "../../LogIn";
import { Context } from "../../App";

const UserForm = ({ info, title, apiCallToSubmitForm, toggle }) => {
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

  const forms = info.map((el, index) => {
    return <FormField fieldName={el} key={index} handleChange={handleChange} />;
  });
  useEffect(() => {
    setEmailState(
      title === "Email Me" ? (
        <textarea name="" id="" cols="30" rows="10"></textarea>
      ) : null
    );
  }, []);
  useEffect(() => {
    setButtonState(
      title === "LogIn" ? (
        <div>
          <a href="/users/resetPassword">
            {" "}
            <button className="btn btn-success btn-block">
              Forgot password?
            </button>
          </a>
          <a href="/users/forgotUsername">
            {" "}
            <button className="btn btn-success btn-block">
              Forgot password?
            </button>
          </a>
        </div>
      ) : null
    );
  }, []);

  const handleSubmit = () => {
    const apiFieldNames = forms.map((el) => {
      return formInfo[el.props.fieldName];
    });
    //const response = apiCallToSubmitForm(...apiFieldNames);
    setUserState("error");
    const toggleStateOrError = userState !== "error" ? toggle() : () => null;
    toggleStateOrError();
  };

  return (
    <>
      <div className="col-md-6 offset-md-3 col-xl-4 offset-xl-4 overlayStyles">
        <h1>{userState}</h1>
        <div className="card shadow modalStyle">
          <img
            src="https://www.instagram.com/p/CV0wFbFvRK-/"
            alt=""
            className="card-img-top"
          />
          <form>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              {forms}
            </div>
            {title === "email" && emailState}
            <button
              className="btn btn-success btn-block"
              onClick={(e) => {
                e.preventDefault();

                handleSubmit({});
              }}
            >
              {title}
            </button>
          </form>

          {title === "LogIn" && buttonState}
        </div>
      </div>
    </>
  );
};

export default UserForm;
