import { createPortal } from "react-dom";

const portal = document.getElementById("portal");

const Portal = ({ children }) => {
  return createPortal(children, portal);
};

export default Portal;
