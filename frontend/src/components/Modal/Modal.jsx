import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

const Modal = ({
  children,
  isOpen,
  shouldBeClosedOutsideClick,
  handleOnClose,
}) => {
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }

    const { current: modal } = modalRef;

    if (isOpen) {
      previousActiveElement.current = document.activeElement;
      modal.showModal();
    } else if (previousActiveElement.current) {
      modal.close();
      previousActiveElement.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const { current: modal } = modalRef;

    const handleCancle = (event) => {
      event.preventDefault();
      handleOnClose();
    };

    modal.addEventListener("cancel", handleCancle);
    return () => {
      modal.removeEventListener("cancle", handleCancle);
    };
  }, [handleOnClose]);

  const handleOutsideClick = ({ target }) => {
    const { current } = modalRef;

    if (shouldBeClosedOutsideClick && target === current) {
      handleOnClose();
    }
  };

  return ReactDOM.createPortal(
    <dialog ref={modalRef} className="modal" onClick={handleOutsideClick}>
      {children}
    </dialog>,
    document.body
  );
};

export default Modal;
