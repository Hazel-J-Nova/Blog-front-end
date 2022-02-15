import { useState, useEffect } from "react";
import "./LoginForm.css";
import useOnClickOutside from "../../utils/Hooks/useOnClickOutside";
import FormField from "./formField";
import { registerUser } from "../../utils/api";

const UserForm = ({ info }) => {
  const [hasSubmitted, setHasSubmitted] = useState();
  const [formInfo, setFormInfo] = useState({
    ...info,
  });

  const forms = info.map((el, index) => {
    return <FormField fieldName={el} key={index} />;
  });

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

  return (
    <div className="col-md-6 offset-md-3 col-xl-4 offset-xl-4 overlayStyles">
      <div className="card shadow modalStyle">
        <img
          src="https://www.instagram.com/p/CV0wFbFvRK-/"
          alt=""
          className="card-img-top"
        />
        <form
          action="/users/login"
          method="POST"
          className="validated-form"
          novalidate
        >
          <div className="card-body">
            <h5 className="card-title">Login</h5>
            {forms}
          </div>
          <button
            className="btn btn-success btn-block"
            onClick={(e) => {
              e.preventDefault();
              setHasSubmitted(!hasSubmitted);
            }}
          >
            Login
          </button>
        </form>
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
    </div>
  );
};

export default UserForm;
