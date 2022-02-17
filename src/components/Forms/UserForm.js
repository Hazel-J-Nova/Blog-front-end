import { useState, useEffect } from "react";
import "./LoginForm.css";
import useOnClickOutside from "../../utils/Hooks/useOnClickOutside";
import FormField from "./formField";
import { registerUser } from "../../utils/api";
import LogIn from "../../LogIn";

const UserForm = ({ info, title }) => {
  const [hasSubmitted, setHasSubmitted] = useState();
  const [emailState, setEmailState] = useState(null);
  const [formInfo, setFormInfo] = useState({
    ...info,
  });
  const [buttonState, setButtonState] = useState(null);
  const forms = info.map((el, index) => {
    return <FormField fieldName={el} key={index} />;
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
    const registerRequest = registerUser(
      formInfo.userName,
      formInfo.email,
      formInfo.password
    );
    setHasSubmitted(registerRequest);
  };

  const handleChange = (event) => {
    setFormInfo((prevFormData) => {
      return { ...prevFormData, [event.target.name]: event.target.value };
    });
  };

  console.log(buttonState);
  return (
    <div className="col-md-6 offset-md-3 col-xl-4 offset-xl-4 overlayStyles">
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
              setHasSubmitted(!hasSubmitted);
            }}
          >
            {title}
          </button>
        </form>

        {title === "LogIn" && buttonState}
      </div>
    </div>
  );
};

export default UserForm;
