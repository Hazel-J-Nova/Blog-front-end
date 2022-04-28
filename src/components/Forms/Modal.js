import "./modal.css";
import useOnClickOutside from "../../utils/Hooks/useOnClickOutside";
import { useRef } from "react";
import useLockBodyScroll from "../../utils/Hooks/useLockBody";
import CSSTransition from "react-transition-group/CSSTransition";
import Portal from "../utils/Portals";

export default function Modal(props) {
  const close = props.close;
  const ref = useRef();
  const closeModal = () => {
    close(props.display);
  };

  useOnClickOutside(ref, () => {
    if (props.display) {
      closeModal();
    }
  });

  useLockBodyScroll(ref);

  const animationTiming = {
    enter: 1000,
    exit: 100,
  };

  return (
    <Portal>
      {
        <div ref={ref} className="modal--styles">
          <CSSTransition
            mountOnEnter
            unmountOnExit
            in={props.display}
            timeout={animationTiming}
            classNames={{
              enter: "",
              enterActive: "ModalOpen",
              exit: "",
              exitActive: "ModalClosed",
            }}
          >
            {props.children}
          </CSSTransition>
          {}
        </div>
      }
    </Portal>
  );
}
