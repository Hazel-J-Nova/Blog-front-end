import { useState, useEffect } from "react";
import "./LoginForm.css";

const LoginForm = (props) => {
  const [hasSubmitted, setHaseSubmitted] = useState(false);
  const [formInfo, setFormInfo] = useState({
    userName: "",
    email: "",
    password: "",
  });
  useEffect(() => {});

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
            <div className="mb-3">
              <label className="form-label" for="username">
                Username
              </label>
              <input
                className="form-control"
                type="text"
                id="username"
                name="username"
                autofocus
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label" for="password">
              Password
            </label>
            <input
              className="form-control"
              type="password"
              id="password"
              name="password"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <button className="btn btn-success btn-block">Login</button>
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
export default LoginForm;
