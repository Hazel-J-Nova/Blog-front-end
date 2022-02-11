import ReactDOM from "react-dom";
import "./modal.scss";
import Close from "./times-solid.svg";
import useOnClickOutside from "../../utils/Hooks/useOnClickOutside";
import { useRef } from "react";
import useLockBodyScroll from "../../utils/Hooks/useLockBody";
import LoginForm from "./LogInForm";

// Usage
export default function Modal(props) {
  // Create a ref that we add to the element for which we want to detect outside clicks
  const closeId = props.id;
  const close = props.close;
  const ref = useRef();
  const closeModal = () => {
    close(closeId);
  };
  useLockBodyScroll();
  useOnClickOutside(ref, () => closeModal());
  const modalContentToRender = (
    <div>
      {props.show ? (
        <div ref={ref}>
          {props.children}
          {}
        </div>
      ) : (
        <button onClick={props.close}>Open Modal</button>
      )}
    </div>
  );
  return ReactDOM.createPortal(
    <>{modalContentToRender}</>,
    document.getElementById("modal")
  );
}
// Hook

// const modal = document.getElementById("modal");
// console.log(modal);
// const Modal = (props) => {
//   let open = props.show ? (
//     <div>
//       <h1>Hello</h1>{" "}
//     </div>
//   ) : null;

//
// };
// export default Modal;
