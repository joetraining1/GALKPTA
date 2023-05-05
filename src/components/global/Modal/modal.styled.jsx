import styled from "styled-components";

export const ModalWrapper = styled.div`
  display: flex;
  width: ${(props) => props.MW}svw;
  height: fit-content;
  position: absolute;
  min-height: ${(props) => props.MH}svh;
  gap: 5vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.BR}vw;
  padding: ${props => props.P}%;
  overflow: hidden;
`;

export const ModalHeads = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: flex-end;
  align-items: center;
`;

export const ModalTitles = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  align-items: center;
`;

export const ModalContents = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 2vh;
`;

export const ModalFooters = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  justify-content: ${props => props.JC};
  align-items: center;
  margin-right: ${props => props.MR}%;
`;
