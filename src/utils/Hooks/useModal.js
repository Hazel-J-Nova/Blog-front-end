import { useState } from "react";
const useModal = () => {
  const [modal, setModal] = useState(false);

  const Toggle = () => {
    setModal((previosModalState) => {
      return !previosModalState;
    });
  };

  const modalClasses = modal ? "ModalOpen" : "ModalClosed";
  return {
    Toggle,
    modalClasses,
    modal,
  };
};

export default useModal;
