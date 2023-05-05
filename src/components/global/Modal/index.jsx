import { Button, Card, Modal, TextField, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { ModalTitles, ModalWrapper } from "./modal.styled";
import { useMediaQuery } from "react-responsive";
import ModalFooter from "./ModalFooter";
import ModalContent from "./ModalContent";
import ModalHead from "./ModalHead";
import useNotif from "../../../hooks/useNotif";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const Modals = ({ bText, bStyle, fStyle, mTitle }) => {
  const [modalIsOpen, setModalOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
  const { toastSuccess, toastError } = useNotif();

  const titleRef = useRef();
  const descRef = useRef();
  const regRef = useRef();
  const nameRef = useRef();

  const handleSubmit1 = () => {
    if (fStyle === "level1") {
      return toastSuccess(`${titleRef.current.value} ${descRef.current.value}`);
    }
    if (fStyle === "level2") {
      return toastError("haha");
    }
  };

  const LevelOne = () => {
    return (
      <React.Fragment>
        <TextField
          inputRef={titleRef}
          size="small"
          label="title"
          sx={{ width: "95%" }}
        />
        <TextField
          inputRef={descRef}
          size="small"
          label="description"
          sx={{ width: "95%" }}
        />
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        onClick={() => setModalOpen((prev) => !prev)}
        sx={bStyle ? bStyle : null}
      >
        {bText}
      </Button>
      {modalIsOpen ? (
        <Modal open={modalIsOpen} onClose={() => setModalOpen((prev) => !prev)}>
          <Card
            sx={{
              display: "flex",
              width: isMobile ? "90svw" : "40svw",
              height: "fit-content",
              position: "absolute",
              zIndex: 1000,
              minHeight: isMobile ? "60svh" : "40svh",
              gap: "5vh",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#fff",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: isMobile ? "1vw" : "0.5vw",
              padding: isMobile ? "5%" : "2%",
              overflow: "hidden",
            }}
          >
            <ModalHead>
              <Button
                variant="text"
                onClick={() => setModalOpen((prev) => !prev)}
              >
                <CloseRoundedIcon />
              </Button>
            </ModalHead>
            <ModalTitles>
              <Typography
                variant="h5"
                sx={{ fontWeight: "600", color: "#2A2B2A" }}
              >
                {mTitle ? mTitle : null}
              </Typography>
            </ModalTitles>
            <ModalContent>
              {fStyle === "level1" ? <LevelOne /> : null}
            </ModalContent>
            <ModalFooter>
              <Button
                variant="outlined"
                onClick={() => setModalOpen((prev) => !prev)}
              >
                cancel
              </Button>
              <Button variant="contained" onClick={() => handleSubmit1()}>
                submit
              </Button>
            </ModalFooter>
          </Card>
        </Modal>
      ) : null}
    </React.Fragment>
  );
};

export default Modals;
