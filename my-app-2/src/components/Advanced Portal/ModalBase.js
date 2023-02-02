import React from "react";
import Portal from "./Portal";
import { CSSTransition } from "react-transition-group";
const ModalBase = ({ visible, onClose, children, bodyClassName }) => {
  return (
    <>
      <CSSTransition
        in={visible}
        timeout={250}
        classNames="zoom"
        unmountOnExit
      >
        {(status) => (
          <Portal
            containerClassName="fixed inset-0 z-50 items-center justify-center flex"
            bodyClassName={`${bodyClassName} relative content`}
            bodyStyle={{ transition: "all 250ms" }}
            visible={status !== "exited"}
            onClose={onClose}
          >
            {children}
          </Portal>
        )}
      </CSSTransition>
    </>
  );
};

export default ModalBase;
