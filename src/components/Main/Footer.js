import { useState } from "react";
import Modal from "../Forms/Modal";
import UserForm from "../Forms/UserForm";
import { sendEmail } from "../../utils/api";
import useModal from "../../utils/Hooks/useModal";
import validators from "../../utils/validators";
import useInput from "../../utils/Hooks/useInput";
import FormField from "../../components/Forms/FormField";

const Footer = (props) => {
  const manageEmailModal = useModal();

  const manageEmailAddressInput = useInput(validators.validateEmail);

  const manageMessage = useInput(validators.validateMessage);
  const [emailState, setEmailState] = useState(false);
  const [errorMessageState, setErroMessageState] = useState("");

  return (
    <footer className="footer">
      <button className="btn" onClick={manageEmailModal.Toggle}>
        <p className="footer__link">Get in touch</p>
      </button>

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
      <Modal
        display={manageEmailModal.modal}
        title="Email Me"
        close={manageEmailModal.Toggle}
        className={manageEmailModal.modalClasses}
      >
        <UserForm title="email me" toggle={manageEmailModal.Toggle}>
          {errorMessageState && <p>something went wrong</p>}
          <FormField
            styleClass="textArea--textInput"
            label="your email address"
            id="email-address"
            type="email"
            onBlur={manageEmailAddressInput.onBlur}
            onChange={manageEmailAddressInput.valueChangeHandler}
            value={manageEmailAddressInput.valueState}
            hasError={manageEmailAddressInput.hasError}
            errotText=" please enter a valid email address"
          ></FormField>

          <textarea
            placeholder="Enter your message"
            className="text-Area"
            name="message"
            id="message"
            onBlur={manageMessage.onBlur}
            onChange={manageMessage.valueChangeHandler}
            value={manageMessage.valueState}
            hasError={manageMessage.hasError}
            errotText="Message must not be empty"
          ></textarea>
          <button
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              setErroMessageState("");
              let response = sendEmail(
                manageMessage.valueState,
                manageEmailAddressInput.valueState
              );
              setEmailState(response);
              console.log(emailState);
              if (!emailState) {
                setErroMessageState("Please retry");
              } else {
                manageEmailAddressInput.setValueState("");
                manageMessage.setValueState("");
                manageEmailModal.Toggle();
              }
            }}
          >
            Email Me
          </button>
        </UserForm>
      </Modal>
    </footer>
  );
};

export default Footer;
