import react, { useState } from "react";
import Modal from "../Forms/Modal";
import UserForm from "../Forms/UserForm";

const Footer = (props) => {
  const emailForm = ["emailAddress", "subject", "message"];
  const [email, setEmail] = useState(false);
  const ToggleEmail = () => {
    setEmail((previosModalState) => {
      return !previosModalState;
    });
  };
  return (
    <footer className="footer">
      <p onClick={ToggleEmail} className="footer__link">
        {props.emailAddress}
      </p>
      <ul className="social-list">
        <li className="social-list__item">
          <a className="social-list__link" href="#">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="#">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
      <Modal show={email} title="Email Me" close={ToggleEmail}>
        <UserForm info={emailForm} title="Email Me"></UserForm>
      </Modal>
    </footer>
  );
};

export default Footer;
