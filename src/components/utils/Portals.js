import { createPortal } from "react-dom";

const portal = document.getElementById("modal");

const Portal = ({ children }) => {
  return createPortal(children, portal);
};

export default Portal;
