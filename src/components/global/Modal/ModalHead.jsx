import React from "react";
import { ModalHeads } from "./modal.styled";

const ModalHead = ({ children }) => {
  return (
    <ModalHeads>
      {children}
    </ModalHeads>
  );
};

export default ModalHead;
